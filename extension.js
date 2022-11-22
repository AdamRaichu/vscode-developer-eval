const vscode = require("vscode");

vscode.commands.registerCommand("AdamRaichu.devtools.eval", function () {
  vscode.window
    .showInputBox({
      title: "Code to eval",
      prompt: "USE WITH CAUTION",
      placeHolder: 'console.log("Hello world")',
    })
    .then(function (code) {
      console.log("Evaluating code...");
      console.log(code);
      eval(code);
    });
});
