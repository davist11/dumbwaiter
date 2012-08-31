var DW = {
	init: function() {
		DW.$form = $('form');
		DW.getSettings();
		
		DW.$form.on('submit', $.proxy(DW.saveSettings, this));
	},
	
	getSettings: function() {
		var settings = [
			{
				name: 'url',
				value: localStorage['url']
			},
			{
				name: 'retrieve',
				value: localStorage['retrieve']
			},
			{
				name: 'insert',
				value: localStorage['insert']
			}
		];

		for(option in settings) {
			if(settings[option].value) {
				$('#' + settings[option].name).val(settings[option].value);
			}
		}
	},
	
	saveSettings: function(e) {
		var data = DW.$form.serializeArray(),
			$message = $('#message');
		
		for(i in data) {
			if(data[i].value) {
				localStorage[data[i].name] = data[i].value;
			}
		}
		
		if($message.length) {
			$message.text('Your settings were saved!');
		} else {
			DW.$form.prepend('<div id="message">Your settings were saved!</div>');
		}
		
		e.preventDefault();
	}
};

$(document).ready(DW.init);