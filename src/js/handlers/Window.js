import { ElementHandler } from '../base/ElementHandler.js';

export class MaximizeWindow extends ElementHandler {
	get targetToken() {
		return '.window__header-button.maximize';
	}

	click(event) {
		const window = document.querySelector('.window');
		if (!window.classList.contains('opened')) window.classList.add('opened');
	}
}

export class MinimizeWindow extends ElementHandler {
	get targetToken() {
		return '.window__header-button.minimize';
	}

	click(event) {
		const window = document.querySelector('.window');
		if (window.classList.contains('opened'))
			window.classList.remove('opened');
	}
}
