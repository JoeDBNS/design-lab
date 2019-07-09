// Vue
var MainVue = new Vue({
	el: '#app-container',
	data: {
		session: {
			date: GetDateValues(),
			urlHostname: window.location.hostname,
			searchText: null
		}
	},
	methods: {
		GetAmOrPm: function(hour) {
			if (hour > 24) {
				hour -= 24;
			}
			return hour >= 12 ? 'pm' : 'am';
		}
	}
});

// For Vue Values
function GetDateValues() {
	var date = new Date();
	var returnDateObject = {
		dayOfWeek: date.getDay(),
		hourOfDay: date.getHours(),
		mmddyyyy: (date.getMonth() + 1).toString() + "-" + (date.getDate()).toString() + "-" + date.getFullYear().toString()
	};
	return returnDateObject;
}

// OnLoad Run
window.addEventListener('load', function() {
	// LoadData();
});