import { ElementHandler } from '../base/ElementHandler.js';

export class NavigationLinks extends ElementHandler {
	get targetToken() {
		return '.menu__item';
	}

	click(event) {
		document.documentElement.classList.toggle('menu-opened');
		const headerHeight = document.querySelector('.header').offsetHeight;
		const scrollToToken =
			event.target.closest('[data-to-scroll]').dataset.toScroll;
		const scrollTo = document.querySelector(scrollToToken);

		if (scrollTo)
			window.scrollTo({
				top: scrollTo.offsetTop - (headerHeight + 15),
				behavior: 'smooth',
			});
	}
}
