const vscode = require('vscode');
const toggleIME = require('./toggleIME')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	toggleIME.activate(context);
}

function deactivate() { }

module.exports = {
	activate,	
	deactivate
}