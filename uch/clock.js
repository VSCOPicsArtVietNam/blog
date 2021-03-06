var clock;

$(document).ready(function() {
	
	// Grab the current date
	var currentDate = new Date();
	
	// Set some date in the future. In this case, it's always Jan 1
	var futureDate = new Date(1512918000000);
	
	// Calculate the difference in seconds between the future and current date
	var diffTime = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	diffTime = diffTime < 0 ? 0 : diffTime;
	
	// Instantiate a coutdown FlipClock
	var clock = $('.clock').FlipClock(diffTime , {
		clockFace: 'DailyCounter',
		language:'vi-vn',
		autoStart: false,
		callbacks: {
			stop: function () {
				var html = [];
				html.push('<h4 class="buy-ico-title-time"><img class="img-logo" src="../images/time-buy-ico.png"><span>ICO START NOW</span></h4>');
				$('#div-time-count-down').html(html.join(''));
			}
		}
	});
	
	clock.setTime(diffTime);
	clock.setCountdown(true);
	clock.start();
});	
