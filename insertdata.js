chrome.extension.onMessage.addListener(function(data) {
	eval(data.extensionOptions.insert);
});
