const loadWebView = () => {
  vscode.postMessage({ command: "run", content: "run" });
};

document
  .querySelector("#reloadEditor")
  .addEventListener("click", () => loadWebView());

loadWebView();
