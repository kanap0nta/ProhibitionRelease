// opeionts.js
document.addEventListener("DOMContentLoaded", _ => {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkboxes.length; i++) {
        (async() => {
            var key = checkboxes[i].id;
            const result = await browser.storage.local.get(key, function (items) {
                if (void 0 !== items[key]) {
                    checkboxes[i].checked = items[key];
                } else {
                    var data = {};
                    data[key] = checkboxes[i].checked;
                    browser.storage.local.set(data);
                }
            });
            checkboxes[i].addEventListener('change', async(e) => {
                var data = {};
                data[key] = e.srcElement.checked;
                browser.storage.local.set(data);
            });
        })();
    }
});