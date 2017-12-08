var clock;

$(document).ready(function() {
	
	// Grab the current date
	var currentDate = new Date();
	
	// Set some date in the future. In this case, it's always Jan 1
	var futureDate = new Date(1512918000000);
	
	// Calculate the difference in seconds between the future and current date
	var diffTime = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	
	// Instantiate a coutdown FlipClock
	clock = $('.clock').FlipClock(diffTime , {
		clockFace: 'DailyCounter',
		language:'vi-vn',
		autoStart: false,
                callbacks: {
                    stop: function () {
                      
                    }
	});
});
