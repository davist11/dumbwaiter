/*/admin.php/publish?path=recipe

<input type="hidden" name="page[full_slug]" value="recipe">
<input type="hidden" name="page[type]" value="number">
<input type="hidden" name="page[folder]" value="recipe">
<input type="hidden" name="page[new]" value="1">

page[yaml][title]
page[meta][slug]
page[yaml][status] = live
page[yaml][categories]
page[yaml][source]


javascript:(function() {var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'http://recipes.dev/assets/scripts/add-recipe.js'; document.getElementsByTagName('head')[0].appendChild(script);})();


*/
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
				
				
				// ourWindow = response.id;
				// console.log(ourWindow)
			});
		});
	});
	
	// newWin = window.open('http://recipes.trevordavis.net/admin.php/publish?path=recipe&new=true', 'myWindow', 'menubar=no,toolbar=no,height=800,width=800');
	// console.log(newWin)
});





// $(document).ready(function() {
// 	
// 
// 	
// 	
// 
// 	var callback = function() {
// 		var formData = {
// 			'page[full_slug]': 'recipe',
// 			'page[type]': 'number',
// 			'page[folder]': 'recipe',
// 			'page[new]': '1',
// 			'page[yaml][title]': 'title here', //$('title').text(),
// 			'page[yaml][slug]': 'TODO',
// 			'page[yaml][status]': 'live',
// 			'page[yaml][source]': window.location.href
// 		};
// 
// 		console.log(formData)
// 
// 
// 	};
// 	
// 	callback();
// });
