(function(func){
	window.addEventListener('load', function() {
		(async() => {
			const result1 = await browser.storage.local.get(null, function (data) {
				var script = document.createElement("script");
				var default_settings = { oncontextmenu: true, oncopy: true, oncut: true, ondrag: true, ondragend: true, ondragover: true, ondragstart: true, ondrop: true, onmousedown: true, onmouseup: true, onselectstart: true, onpaste: true, userSelect: true, MozUserSelect: true, MsUserSelect: true, WebkitUserSelect: true, pointerEvents: true, jQuery: true};
				if (0 === Object.keys(data).length) {
					script.textContent = func(default_settings);
				 } else {
					script.textContent = func(data);
				 }
				document.body.appendChild(script);
			});
		})();
	}, false);
})(function(settings) {
		var textContent = "(function(){\n";
		textContent += "function prohibitation_release(doc) {\n";
		textContent += "var f = function(){ return true; };\n";
		for(var key in settings) {
			if(settings.hasOwnProperty(key)) {
				let regexp = /^on/;
				if(regexp.test(key)) {
					var val = settings[key];
					if (true === val){
						textContent = textContent + "doc." + key + " = f();\n";
						if(settings.jQuery && true === settings.jQuery) {
							textContent += "if('undefined' !== typeof jQuery){\n";
							var event = key.replace("on", "");
							textContent = textContent + "jQuery(\"*\").off(\""  + event + "\");\n";
							textContent += "}\n";
						}
					}
				}
			}
		}
		if (settings.userSelect && true === settings.userSelect) textContent += "if (void 0 !== doc.style) doc.style.userSelect = \"auto\";\n";
		if (settings.userSelect && true === settings.userSelect) textContent += "if (void 0 !== doc.style) doc.style.userSelect = \"auto\";\n";
		if (settings.MozUserSelect && true === settings.MozUserSelect) textContent += "if (void 0 !== doc.style) doc.style.MozUserSelect = \"auto\";\n";
		if (settings.MsUserSelect && true === settings.MsUserSelect) textContent += "if (void 0 !== doc.style) doc.style.MsUserSelect = \"auto\";\n";
		if (settings.WebkitUserSelect && true === settings.WebkitUserSelect) textContent += "if (void 0 !== doc.style) doc.style.WebkitUserSelect = \"auto\";\n";
		if (settings.pointerEvents && true === settings.pointerEvents) textContent += "if (void 0 !== doc.style) doc.style.pointerEvents = \"auto\";\n";
		if ( (settings.opacity && true === settings.opacity) || (settings.visibility && true === settings.visibility) || (settings.display && true === settings.display) ) {
			textContent += "if(void 0 !== doc.style) {\n";
			textContent += "var elements = document.getElementsByTagName(\"*\");\n";
			textContent += "for(var i = 0; i < elements.length; i++) {\n";
			textContent += "var cssStyleDeclaration = getComputedStyle(elements[i], null);\n";
			if (settings.opacity && true === settings.opacity) {
				textContent += "if(\"0\" === cssStyleDeclaration.getPropertyValue(\"opacity\")) {\n";
				textContent += "elements[i].style.setProperty(\"opacity\", 0.5);\n";
				textContent += "elements[i].style.setProperty(\"border\", \"solid\");\n";
				textContent += "elements[i].style.setProperty(\"border-color\", \"#EC008C\");\n";
				textContent += "}\n";
			}
			if (settings.visibility && true === settings.visibility) {
				textContent += "if(\"hidden\" === cssStyleDeclaration.getPropertyValue(\"visibility\")) {\n";
				textContent += "elements[i].style.setProperty(\"visibility\", \"visible\");\n";
				textContent += "elements[i].style.setProperty(\"border\", \"solid\");\n";
				textContent += "elements[i].style.setProperty(\"border-color\", \"#EC008C\");\n";
				textContent += "}\n";
			}
			if (settings.display && true === settings.display) {
				textContent += "if(\"none\" === cssStyleDeclaration.getPropertyValue(\"display\") && \"SCRIPT\" !== elements[i].tagName) {\n";
				textContent += "elements[i].style.setProperty(\"display\", \"inherit\");\n";
				textContent += "elements[i].style.setProperty(\"border\", \"solid\");\n";
				textContent += "elements[i].style.setProperty(\"border-color\", \"#EC008C\");\n";
				textContent += "}\n";
			}
			textContent += "}\n";
			textContent += "}\n";
		}
		textContent += "}\n";
		textContent += "prohibitation_release(document.getElementsByTagName('html')[0]);\n";
		textContent += "prohibitation_release(document);\n";
		textContent += "for(var i = 0; i < document.all.length; i++){\n";
		textContent += "prohibitation_release(document.all[i]);\n";

		textContent += "}\n";
		textContent += "})()\n";

		return textContent;
	}
)
