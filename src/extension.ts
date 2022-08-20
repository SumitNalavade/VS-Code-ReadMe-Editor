import * as vscode from "vscode";
import { MainViewLoader } from "./MainViewLoader";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "readme-editor-sidebar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-readme-editor.open", () => {
      MainViewLoader.showWebview(context);
    })
  );
}

export function deactivate() {}
