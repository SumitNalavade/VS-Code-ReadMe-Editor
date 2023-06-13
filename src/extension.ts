import * as vscode from "vscode";
import { commands, ExtensionContext } from "vscode";
import { ReadMeEditorPanel } from "./panels/Panel";

export function activate(context: ExtensionContext) {
  // Create the show readme command
  const showReadMeCommand = commands.registerCommand("readme-editor.open", () => {
    ReadMeEditorPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(showReadMeCommand);
}
