const vscode = require("vscode");

vscode.commands.registerCommand("AdamRaichu.devtools.evalInput", function () {
  vscode.window
    .showInputBox({
      title: "Code to eval",
      prompt: "USE WITH CAUTION",
      placeHolder: 'console.log("Hello world")',
    })
    .then(function (code) {
      console.log("Evaluating code...");
      console.log(code);
      try {
        eval(code);
      } catch (error) {
        vscode.window.showErrorMessage(error.toString());
      }
    });
});
