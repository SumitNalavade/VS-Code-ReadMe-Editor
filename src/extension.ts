import * as vscode from 'vscode';
import { ViewLoader } from './ViewLoader';
import TargetTreeProvider from './targetTreeProvider';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider('readme-sidebar-view', new TargetTreeProvider());
  
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-readme-editor.open', () => {
      ViewLoader.showWebview(context);
    })
  );
}

export function deactivate() {}
