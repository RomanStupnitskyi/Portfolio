import { Utils } from './modules/Utils.js';

Utils.isWebp();

// initialize elements handlers
import handlers from './handlers.js';

for (const Handler of handlers) {
	const handler = new Handler();
	handler.initialize();
}
