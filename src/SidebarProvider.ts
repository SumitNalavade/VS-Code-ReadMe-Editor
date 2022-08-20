import * as vscode from "vscode";
import { getNonce } from "./utils";

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage((data) => {
      console.log(data);
      vscode.commands.executeCommand("vscode-readme-editor.open");
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "src", "sidebar.js")
    );

    // Use a nonce to only allow a specific script to be run.
    const nonce = getNonce();

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <!--
                Use a content security policy to only allow loading images from https or from our extension directory,
                and only allow scripts that have a specific nonce.
            -->
            <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'unsafe-inline';">
            <style>
                #reloadEditor {
                    width: 100%;
                    background-color: #ef476f;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 10px;
                    transition: filter 0.1s ease-in-out;
                    cursor: pointer;
                }

                #reloadEditor:hover {
                  filter: brightness(70%);
                }
            </style>
            </head>
        <body>
            <button id="reloadEditor" >Reload Editor</button>
            <script nonce="${nonce}">
              const vscode = acquireVsCodeApi();

              const loadWebView = () => {
                vscode.postMessage({ command: "run", content: "run" })
              };

              document.querySelector("#reloadEditor").addEventListener("click", () => loadWebView());

              loadWebView();
            </script>
        </body>
        </html>`;
  }
}
