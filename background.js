var data;

chrome.extension.onMessage.addListener(function(details) {
	data = details;
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method === 'getLocalStorage') {
		sendResponse({data: localStorage});
	} else {
		sendResponse({});
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {
		file: 'contentscript.js'
	});

	chrome.windows.create({
		url: localStorage.url,
		height: 800,
		width: 800,
		type: 'popup'
	}, function() {
		chrome.windows.getCurrent(function(window) {
			chrome.tabs.getSelected(window.id, function (response){					
				chrome.tabs.executeScript(null, {
					file: "jquery.js"
				}, function() {
				    chrome.tabs.executeScript(null, {
						file: "insertdata.js" 
					}, function() {
						//Add extension options into object
						data.extensionOptions = localStorage;
						
						chrome.tabs.sendMessage(response.id, data);
					});
				});
			});
		});
	});
});