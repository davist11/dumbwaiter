var data;

chrome.extension.onMessage.addListener(function(details) {
	data = details;
});

chrome.browserAction.onClicked.addListener(function(tab) {	
	chrome.tabs.executeScript(null, {
		file: 'contentscript.js'
	});

	chrome.windows.create({
		url: 'http://recipes.trevordavis.net/admin.php/publish?path=recipe&new=true',
		height: 800,
		width: 800,
		type: 'popup'
	}, function() {
		chrome.windows.getCurrent(function(window) {
			chrome.tabs.getSelected(window.id, function (response){	
				
				chrome.tabs.executeScript(null, {
					file: 'insertdata.js'
				}, function() {
					chrome.tabs.sendMessage(response.id, data);
				});
			});
		});
	});
});