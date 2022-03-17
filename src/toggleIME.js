"use strict";

const vscode = require('vscode')
const hscopes = require('./hscopes')
const exec = require('child_process').execFile;

let currentInMath = false
let previousInMath = false

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    vscode.window.onDidChangeTextEditorSelection((e) =>
        toggleImeCondition(e.textEditor.document, e.selections[0].active)
    )
}

function toggleImeCondition(document, position) {
    // Get scope
    const scope = hscopes.getScope(document, position);
    if (!scope)
        return;
    const scopeText = hscopes.getScope(document, position).toString();
    // If ( scope not change ) return;
    currentInMath = (scopeText.indexOf("math") !== -1);
    if (currentInMath === previousInMath)
        return;
    // Else: 
    // in math environment => to EN ; Else => to CN
    exec(currentInMath ? "IMEtoEN" : "IMEtoCN", (err) => {err && console.log(err)});
    previousInMath = currentInMath;
}

module.exports = {
    activate
}