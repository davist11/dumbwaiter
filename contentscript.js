// TODO: INCLUDE jQUERY SOURCE HERE

var title = $('meta[property="og:title"]').attr('content');
var source = window.location.href;
var img = $('meta[property="og:image"]').attr('content');
var content = window.getSelection().toString();

if(title === '') {
	title = $('title').text();
}

var details = {
	title: title,
	source: source,
	img: img,
	content: content
};

chrome.extension.sendMessage(details);
