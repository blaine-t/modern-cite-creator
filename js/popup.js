document.addEventListener('DOMContentLoaded', function () {

	chrome.storage.sync.get('enabled', function (settings) {
		if (settings.enabled == 0) {
			document.getElementById('cm_myonoffswitch').checked = false;
			console.log('Modern Cite Creator disabled');
		}
		else {
			document.getElementById('cm_myonoffswitch').checked = true;
			console.log('Modern Cite Creator enabled');
		}
	});

	document.querySelector('#cm_myonoffswitch').addEventListener('change', onOffHandler);

	document.getElementById('cite_popupoptionslink').href = chrome.runtime.getURL("html/options.html");
	document.getElementById('cite_popupoptionslink').target = '_blank';
});

function onOffHandler() {
	if (document.getElementById('cm_myonoffswitch').checked) {
		chrome.storage.sync.set({ 'enabled': 1 }, function () {
			chrome.storage.sync.get('enabled', function (settings) {
			});
			console.log('Modern Cite Creator enabled');
		});
	}
	else {
		chrome.storage.sync.set({ 'enabled': 0 }, function () {
			console.log('Modern Cite Creator disabled');
		});
	}
}
