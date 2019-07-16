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
	x0001_InitListener();
	x0011_InitListener();
	x0012_InitListener();
});



// x0001
	function x0001_InitListener() {
		Array.from(document.querySelectorAll('#design-content-x0001 .choice')).forEach(function(element) {
			element.addEventListener('click', function() {
				if (element.classList.toString().indexOf('choice-set') !== -1) {
					element.classList.remove('choice-set');
				}
				else
					element.classList.add('choice-set');
			});
		});
	}

// x0011
	function x0011_InitListener() {
		Array.from(document.querySelectorAll('#design-content-x0011 .item-display')).forEach(function(element) {
			element.addEventListener('click', function() {
				if (element.classList.toString().indexOf('item-display-selected') !== -1) {
					element.classList.remove('item-display-selected');
				}
				else
					element.classList.add('item-display-selected');
			});
		});
	}

// x0012
	function x0012_InitListener() {
		Array.from(document.querySelectorAll('#design-content-x0012 .input-field')).forEach(function(element) {
			element.addEventListener('change', function(event) {
				x0012_CheckFieldChanged(element);
			});
		});
	}
	function x0012_CheckFieldChanged(element) {
		if (element.value === '') {
			element.parentElement.getElementsByTagName('label')[0].classList.add('input-label-format-null');
		}
		else {
			element.parentElement.getElementsByTagName('label')[0].classList.remove('input-label-format-null');
		}
	}