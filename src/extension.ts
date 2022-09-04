import * as vscode from 'vscode';
import CompletionProvider from './provider';

export async function activate(context: vscode.ExtensionContext) {
  const provider = new CompletionProvider();
  context.subscriptions.push(provider);

	context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      ['erb', 'haml', 'slim'],
      provider,
      ' '
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
