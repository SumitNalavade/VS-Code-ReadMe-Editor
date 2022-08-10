import * as vscode from "vscode";
import { MainViewLoader } from "./MainViewLoader";
import { SidebarProvider } from "./SidebarProvider";
import TargetTreeProvider from "./targetTreeProvider";

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.registerTreeDataProvider(
  //   "readme-sidebar-view",
  //   new TargetTreeProvider()
  // );

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "vstodo-sidebar",
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
