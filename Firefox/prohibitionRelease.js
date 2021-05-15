// prohibitionRelease.js
(function () {
	window.addEventListener('load', function () {
		(async() => {
			const result1 = await browser.storage.local.get(null, function (data) {
				var script = document.createElement("script");
				var default_settings = {
					oncontextmenu: true,
					oncopy: true,
					oncut: true,
					ondrag: true,
					ondragend: true,
					ondragover: true,
					ondragstart: true,
					ondrop: true,
					onmousedown: true,
					onmouseup: true,
					onselectstart: true,
					onpaste: true,
					userSelect: true,
					MozUserSelect: true,
					MsUserSelect: true,
					WebkitUserSelect: true,
					pointerEvents: true,
					jQuery: true
				};
				if (0 === Object.keys(data).length) {
					(async() => {
						script.textContent = "(function(){\n" + await bg.MakeScript(default_settings) + "})()\n";
					})();
				} else {
					(async() => {
						script.textContent = "(function(){\n" + await bg.MakeScript(data) + "})()\n";
					})();
				}
				document.body.appendChild(script);
			});
		})();
	}, false);
})()