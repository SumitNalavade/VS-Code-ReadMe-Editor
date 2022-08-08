interface vscode {
    postMessage: (content: { command: string, content: any }) => void
}

declare global {
    var vscode: vscode;
}

export {};
