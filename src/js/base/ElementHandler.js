export class ElementHandler {
	get targetToken() {
		throw new Error();
	}

	get targets() {
		const elements = document.querySelectorAll(this.targetToken);
		if (elements.length === 0) throw new Error();
		return elements;
	}

	initialize() {
		const ignoreNames = ['constructor', 'targetToken', 'target'];
		const listeners = Object.getOwnPropertyNames(
			Object.getPrototypeOf(this),
		).filter((n) => !ignoreNames.includes(n) && !n.startsWith('_'));

		for (const listener of listeners) {
			for (const target of this.targets) {
				target.addEventListener(listener, (event) => {
					this.target = event.target;
					this[listener](event);
				});
			}
		}
	}
}
