import * as vscode from "vscode";
import * as path from "path";
import { posix } from "path";
import { getNonce } from "./utils";

export class MainViewLoader {
  public static currentPanel?: vscode.WebviewPanel;

  private panel: vscode.WebviewPanel;
  private context: vscode.ExtensionContext;
  private disposables: vscode.Disposable[];

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    this.disposables = [];

    this.panel = vscode.window.createWebviewPanel(
      "reactApp",
      "ReadMe Editor",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vscode.Uri.file(path.join(this.context.extensionPath, "out", "app")),
        ],
      }
    );

    // render webview
    this.renderWebview();

    this.panel.onDidDispose(
      () => {
        this.dispose();
      },
      null,
      this.disposables
    );
  }

  private renderWebview() {
    const html = this.render();
    this.panel.webview.html = html;
  }

  public dispose() {
    MainViewLoader.currentPanel = undefined;

    // Clean up our resources
    this.panel.dispose();

    while (this.disposables.length) {
      const x = this.disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  static showWebview(context: vscode.ExtensionContext) {
    const cls = this;
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    if (cls.currentPanel) {
      cls.currentPanel.reveal(column);
    } else {
      cls.currentPanel = new cls(context).panel;
    }
  }

  saveReadMeBufferToWorkspaceRoot = (readMeBuffer: Uint8Array) => {
    if (!vscode.workspace.workspaceFolders) {
      return vscode.window.showErrorMessage("No workspace found 😳");
    }

    const workspaceRootUri = vscode.workspace.workspaceFolders[0]!.uri;
    const newReadMeUri = workspaceRootUri.with({
      path: posix.join(workspaceRootUri.path, "README.md"),
    });

    vscode.workspace.fs.writeFile(newReadMeUri, readMeBuffer);
  };

  render() {
    const nonce = getNonce();

    const bundleScriptPath = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(this.context.extensionPath, "out", "app", "bundle.js")
      )
    );

    const zustandScriptPath = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(
          this.context.extensionPath,
          "node_modules",
          "zustand",
          "index.js"
        )
      )
    );

    const reactMarkdownScriptPath = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(
          this.context.extensionPath,
          "node_modules",
          "react-markdown",
          "index.js"
        )
      )
    );

    const remarkGfmScript = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(
          this.context.extensionPath,
          "node_modules",
          "remark-gfm",
          "index.js"
        )
      )
    );

    const monacoEditorScript = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(
          this.context.extensionPath,
          "node_modules",
          "@monaco-editor",
          "react",
          "lib",
          "umd",
          "monaco-react.min.js"
        )
      )
    );

    const dropzoneScript = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(
          this.context.extensionPath,
          "node_modules",
          "react-dropzone",
          "src",
          "index.js"
        )
      )
    );

    this.panel.webview.onDidReceiveMessage((message) => {
      const { command, content } = message;

      switch (command) {
        case "saveReadMe":
          const strippedBase64 = (content as string).replace(
            "data:text/plain;base64,",
            ""
          );

          const bufferValue = Buffer.from(strippedBase64, "base64");
          try {
            this.saveReadMeBufferToWorkspaceRoot(bufferValue);
            vscode.window.showInformationMessage(
              "ReadMe saved to root successfully 😊"
            );
          } catch {
            vscode.window.showErrorMessage("Something went wrong 😳");
          }
          break;
        case "info":
          vscode.window.showInformationMessage(content);
          break;
        case "error":
          vscode.window.showErrorMessage(content);
          break;
      }
    });

    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          <title>ReadMe Editor</title>
        </head>

        <body>
          <div id="root"></div>
          <script>
            const vscode = acquireVsCodeApi();
          </script>
          <script src="${bundleScriptPath}" nonce=${nonce}></script>
          <script src="${zustandScriptPath}" nonce=${nonce}></script>
          <script src="${reactMarkdownScriptPath}" nonce=${nonce}></script>
          <script src="${remarkGfmScript}" nonce=${nonce}></script>
          <script src="${monacoEditorScript}" nonce=${nonce}></script>
          <script src="${dropzoneScript}" nonce=${nonce}></script>
          <script>const vscode = acquireVsCodeApi();</script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
      </html>
    `;
  }
}
