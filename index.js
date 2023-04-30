window.onload = function() {
	// Select elements
	var hoursInput = document.getElementById('hours');
	var minutesInput = document.getElementById('minutes');
	var setAlarmButton = document.getElementById('set-alarm');
	
	// Set alarm function
	function setAlarm() {
		// Get input values
		var hours = parseInt(hoursInput.value);
		var minutes = parseInt(minutesInput.value);
		
		// Validate input
		if (isNaN(hours) || isNaN(minutes)) {
			alert('Please enter valid input');
			return;
		}
		
		// Set alarm time
		var alarmTime = new Date();
		alarmTime.setHours(hours);
		alarmTime.setMinutes(minutes);
		alarmTime.setSeconds(0);
		
		// Get current time
		var now = new Date();
		
		// Calculate time difference in milliseconds
		var timeDiff = alarmTime.getTime() - now.getTime();
		
		// Check if alarm time is in the past
		if (timeDiff < 0) {
			alert('Please enter a future time');
			return;
		}
		
		// Set timeout to trigger alarm
		setTimeout(function() {
			alert('Alarm!');
		}, timeDiff);
	}
	
	// Add click event listener to set alarm button
	setAlarmButton.addEventListener('click', setAlarm);
};