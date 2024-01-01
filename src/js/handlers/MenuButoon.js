import { ElementHandler } from '../base/ElementHandler.js';

export class MenuButton extends ElementHandler {
	get targetToken() {
		return '.icon-menu';
	}

	click(event) {
		document.documentElement.classList.toggle('menu-opened');
	}
}
