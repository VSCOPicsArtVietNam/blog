var coinCurrency = {
	"BTC" : {"Name" : "Bitcoin", "CurrencyNameSymbol" : "BTC", "Price" : "0"},
	"HXT" : {"Name" : "Hextracoin", "CurrencyNameSymbol" : "HXT", "Price" : "0"},
	"USD" : {"Name" : "US DOLLAR", "CurrencyNameSymbol" : "$", "Price" : "0"},
	"VND" : {"Name" : "Vietnam Dong", "CurrencyNameSymbol" : "₫", "Price" : "0"}
};

var defaultCurrency = "USD";
var altCurrency = "VND";

$(function() {
	$(this).bind("contextmenu", function(e) {
		//e.preventDefault();
	});
}); 
var seconds = 60; // Thời gian làm mới giá
(function getHXTPrice(){
	$.ajax({
		type: 'GET',
		url: 'https://hextracoin.com/rate.php',
		dataType: "json",
		crossDomain: true,
		success: function (data) {
			var coinCode = "HXT";
			var coinName = coinCurrency[coinCode].Name;
			var coinPrice = coinCurrency[coinCode].Price = data.price;
			var priceType = coinCurrency[defaultCurrency].CurrencyNameSymbol;
			var html = [];
			html.push('<p class="info-section">');
			html.push('<span class="txt-coin-HXT">' + coinName +'</span>');
			html.push('<span class="txt-coin-char">(' + coinCode + ')</span>');
			html.push('</p>');
			html.push('<p class="price-section">');
			html.push('<span class="txt-coin-price">' + $.number(coinPrice, 2) + '</span>');
			html.push('<span class="txt-coin-currency">' + priceType +'</span>');
			html.push('<span class="txt-coin-pricevnd">' + doConvert("hxt-vnd", coinPrice) +'</span>');
			html.push('<span class="txt-coin-currency">' + coinCurrency[altCurrency].CurrencyNameSymbol +'</span>');
			html.push('</p>');
			$('#hxt-panel').html(html.join(' '));
			
		},
		complete: function(data) {
			convertHXTtoBTC();
			setTimeout(getHXTPrice, seconds * 1000);
		},
		error: function() { console.log('Có lỗi!'); }
	});
})();

(function getBTCPrice(){
	$.ajax({
		type: 'GET',
		url: 'https://blockchain.info/vi/ticker',
		dataType: "json",
		success: function (data) {
			var coinCode = "BTC";
			var coinName = coinCurrency[coinCode].Name;
			var coinPrice = coinCurrency[coinCode].Price = data[defaultCurrency].last;
			var priceType = coinCurrency[defaultCurrency].CurrencyNameSymbol;
			var html = [];
			html.push('<p class="info-section">');
			html.push('<span class="txt-coin-BTC">' + coinName +'</span>');
			html.push('<span class="txt-coin-char">(' + coinCode + ')</span>');
			html.push('</p>');
			html.push('<p class="price-section">');
			html.push('<span class="txt-coin-price">' + $.number(coinPrice, 2) + '</span>');
			html.push('<span class="txt-coin-currency">' + priceType +'</span>');
			html.push('<span class="txt-coin-pricevnd">' + doConvert("btc-vnd", coinPrice) +'</span>');
			html.push('<span class="txt-coin-currency">' + coinCurrency[altCurrency].CurrencyNameSymbol +'</span>');
			html.push('</p>');
			$('#btc-panel').html(html.join(' '));
		},
		complete: function(data) {
			convertHXTtoBTC();
			setTimeout(getBTCPrice, seconds * 1000);
		},
		error: function() { console.log('Có lỗi!'); }
	});
})();

(function getUSDtoVND(){
	$.ajax({
		type: 'GET',
		url: 'https://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx',
		dataType: "xml",
		success: function (data) {
			$(data).find('Exrate').each(function(){
				var $entry = $(this);
				$entry.attr("CurrencyCode") === "USD" ? coinCurrency[altCurrency].Price = $entry.attr("Sell") : coinCurrency[altCurrency].Price = 0;
			})
			var html = [];
			html.push('<p class="info-section">');
			html.push('<span class="txt-coin-Exchange">' + defaultCurrency + '</span>');
			html.push('<span class="txt-coin-ExchangeTo">' + altCurrency +'</span>');
			html.push('</p>');
			html.push('<p class="price-section">');
			html.push('<span class="txt-coin-price">' + $.number(1, 0) + '</span>');
			html.push('<span class="txt-coin-currency">' + coinCurrency[defaultCurrency].CurrencyNameSymbol +'</span>');
			html.push('<span class="txt-coin-pricevnd">' + $.number(coinCurrency[altCurrency].Price, 0) +'</span>');
			html.push('<span class="txt-coin-currency">' + coinCurrency[altCurrency].CurrencyNameSymbol +'</span>');
			html.push('</p>');
			$('#vnd-price').html(html.join(' '));
		},
		complete: function(data) {
			convertHXTtoBTC();
			setTimeout(getUSDtoVND, seconds * 1000);
		},
		error: function() { console.log('Có lỗi!'); }
	});
})();

$(document).ready(function(){
	//var autoConvert = setInterval(convertHXTtoBTC(), 1000);
});

function convertHXTtoBTC() {
	var html = [];
	html.push('<p class="info-section">');
	html.push('<span class="txt-coin-Exchange">HXT</span>');
	html.push('<span class="txt-coin-ExchangeTo">BTC</span>');
	html.push('</p>');
	html.push('<p class="price-section">');
	html.push('<span class="txt-coin-price">' + $.number(1, 0) + '</span>');
	html.push('<span class="txt-coin-currency">' + coinCurrency.HXT.CurrencyNameSymbol +'</span>');
	html.push('<span class="txt-coin-pricevnd">' + doConvert("hxt-btc", 0) +'</span>');
	html.push('<span class="txt-coin-currency">' + coinCurrency.BTC.CurrencyNameSymbol +'</span>');
	html.push('</p>');
	$('#hxt-to-btc-panel').html(html.join(' '));
}

function doConvert(t, n) {
	var r = 0;
	var n = parseFloat(n).toFixed(2);
	switch(t){
		case "hxt-btc":
		r = parseFloat(coinCurrency.HXT.Price / coinCurrency.BTC.Price).toFixed(8);
	r = $.number(r, 8);
	return r;
	case "hxt-vnd":	
	r = parseFloat(n * coinCurrency[altCurrency].Price).toFixed(2);
	r = $.number(r, 0);
	return r;
	case "btc-vnd":
	console.log("BTC " + n);
	r = parseFloat(n * coinCurrency[altCurrency].Price).toFixed(2);
	r = $.number(r, 0);
	return r;
	default:
	return "Default";
}
}
