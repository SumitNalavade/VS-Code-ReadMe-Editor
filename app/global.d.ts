interface vscode {
    postMessage: (message: any) => void
}

declare global {
    var vscode: vscode;
}

export {};
