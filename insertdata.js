// TODO: INCLUDE jQUERY SOURCE HERE

chrome.extension.onMessage.addListener(function(details) {
	//TODO: how do i fire this stuff after jquery and the rest of the window is loaded
	$('#publish-title').val(details.title).trigger('keyup');
	$('input[name="page[yaml][source]"]').val(details.source);
	$('#publish-content').val(details.content);
});
