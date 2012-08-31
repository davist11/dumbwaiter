chrome.extension.sendRequest({method: 'getLocalStorage'}, function(response) {
	var options = response.data;
	
	eval(options.retrieve);
	
	chrome.extension.sendMessage(data);
});