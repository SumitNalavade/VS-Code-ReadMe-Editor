import * as vscode from 'vscode';

export default class TargetTreeProvider implements vscode.TreeDataProvider<object> {
  private _onDidChangeTreeData: vscode.EventEmitter<object | undefined> = new vscode.EventEmitter<object | undefined>();
  readonly onDidChangeTreeData: vscode.Event<object | undefined> = this._onDidChangeTreeData.event;

  constructor() {}

  getTreeItem(element: object): vscode.TreeItem {
    return element;
  }

  getChildren(element?: object): Thenable<object[]> {
    vscode.commands.executeCommand('vscode-readme-editor.open');
    
    this._onDidChangeTreeData.fire(); // Make sure collection is not cached.
    return Promise.reject([]);
  }
}