import * as vscode from "vscode";
import { MainViewLoader } from "./MainViewLoader";
import { SidebarProvider } from "./SidebarProvider";
import { LocalStorageService } from "./localStorageService";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);
  const localStorageService = new LocalStorageService(context.workspaceState);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "readme-editor-sidebar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-readme-editor.open", () => {
      MainViewLoader.showWebview(context);
      MainViewLoader.currentPanel?.webview.postMessage({ command: 'refactor' });
      const test = localStorageService.getValue("pastReadMes");
      console.log(test);
    })
  );
}

export function deactivate() {}
