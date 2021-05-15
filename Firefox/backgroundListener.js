// backgroundListener.js
'use strict';
window.bg = window.bg || {};
(function () {
	browser.runtime.onMessage.addListener(function (req, sender, sendResponse) {
		if (req.method in bg && bg[req.method] instanceof Function) {
			let func = bg[req.method];
			try {
				var result = func.apply(func, req.args || []);
				if (!(result instanceof Promise)) {
					let trueResult = result;
					result = new Promise((resolve, reject) => {
						try {
							resolve(trueResult);
						} catch (e) {
							reject(e);
						}
					});
				}
				result.then(result => sendResponse({
					status: "OK",
					data: result
				})).catch(e => sendResponse({
					status: "ERROR",
					error: e.toString()
				}));
			} catch (e) {
				sendResponse({
					status: "ERROR",
					error: e.toString()
				});
			}
		} else {
			sendResponse({
				status: "ERROR",
				error: `method not found - ${req.method}`
			});
		}
		return true;
	});
})();