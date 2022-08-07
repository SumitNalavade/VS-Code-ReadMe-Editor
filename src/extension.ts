import * as vscode from 'vscode';
import { ViewLoader } from './ViewLoader';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-readme-editor.open', () => {
      ViewLoader.showWebview(context);
    }),
  );
  
}

export function deactivate() {}