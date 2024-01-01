import { ElementHandler } from '../base/ElementHandler.js';

export class CodeEditor extends ElementHandler {
	constructor() {
		super();
		this.editor = ace.edit(this.targetToken.substring(1));
		this.editor.setTheme('ace/theme/monokai');
		this.editor.session.setMode('ace/mode/javascript');
	}

	get targetToken() {
		return '#code-editor__code';
	}
}
