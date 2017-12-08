var noiDungCaptcha = {
	"/Content/Captcha/uch-captcha-1.png":"f7gkb",
    "/Content/Captcha/uch-captcha-2.png":"8tjku",
    "/Content/Captcha/uch-captcha-3.png":"uqcxp",
    "/Content/Captcha/uch-captcha-4.png":"g9ga9",
    "/Content/Captcha/uch-captcha-5.png":"kphhb",
    "/Content/Captcha/uch-captcha-6.png":"tcucd",
    "/Content/Captcha/uch-captcha-7.png":"zkuuj",
    "/Content/Captcha/uch-captcha-8.png":"zyux8",
    "/Content/Captcha/uch-captcha-9.png":"nen3v",
    "/Content/Captcha/uch-captcha-10.png":"2k888",
    "/Content/Captcha/uch-captcha-11.png":"6vu1n",
    "/Content/Captcha/uch-captcha-12.png":"01xya",
    "/Content/Captcha/uch-captcha-13.png":"ppgah",
    "/Content/Captcha/uch-captcha-14.png":"jjd7d",
    "/Content/Captcha/uch-captcha-15.png":"7veph",
    "/Content/Captcha/uch-captcha-16.png":"fz4xj",
    "/Content/Captcha/uch-captcha-17.png":"q36vj",
    "/Content/Captcha/uch-captcha-18.png":"a7gx9",
    "/Content/Captcha/uch-captcha-19.png":"af8dx",
    "/Content/Captcha/uch-captcha-20.png":"9d8ug",
    "/Content/Captcha/uch-captcha-50.png":"rrhnu",
    "/Content/Captcha/uch-captcha-51.png":"bjd7b",
    "/Content/Captcha/uch-captcha-52.png":"2k9pp",
    "/Content/Captcha/uch-captcha-53.png":"9uglk",
    "/Content/Captcha/uch-captcha-54.png":"qrrvj",
    "/Content/Captcha/uch-captcha-55.png":"kv8bf",
    "/Content/Captcha/uch-captcha-56.png":"7j7k8",
    "/Content/Captcha/uch-captcha-57.png":"yrfvd",
    "/Content/Captcha/uch-captcha-58.png":"2ujly",
    "/Content/Captcha/uch-captcha-59.png":"cauq3",
    "/Content/Captcha/uch-captcha-60.png":"7ffxr",
    "/Content/Captcha/uch-captcha-61.png":"y26gx",
    "/Content/Captcha/uch-captcha-62.png":"2nbvb",
    "/Content/Captcha/uch-captcha-63.png":"qxejc",
    "/Content/Captcha/uch-captcha-64.png":"7nbq9",
    "/Content/Captcha/uch-captcha-65.png":"zt666",
    "/Content/Captcha/uch-captcha-66.png":"dzh1a",
    "/Content/Captcha/uch-captcha-67.png":"v2rnk",
    "/Content/Captcha/uch-captcha-68.png":"thhx6",
    "/Content/Captcha/uch-captcha-69.png":"okedg",
	"/Content/Captcha/next-captcha-ico-1350.png":"2u9zh",
	"/Content/Captcha/next-captcha-ico-1351.png":"0bn9z",
	"/Content/Captcha/next-captcha-ico-1352.png":"z3u8v",
	"/Content/Captcha/next-captcha-ico-1353.png":"82v71",
	"/Content/Captcha/next-captcha-ico-1354.png":"z36ec",
	"/Content/Captcha/next-captcha-ico-1355.png":"apu71",
	"/Content/Captcha/next-captcha-ico-1356.png":"cfkke",
	"/Content/Captcha/next-captcha-ico-1357.png":"fzt1b",
	"/Content/Captcha/next-captcha-ico-1358.png":"vpfrh",
	"/Content/Captcha/next-captcha-ico-1359.png":"3t6zj",
	"/Content/Captcha/next-captcha-ico-1360.png":"7nhaq",
	"/Content/Captcha/next-captcha-ico-1361.png":"gvtqe",
	"/Content/Captcha/next-captcha-ico-1362.png":"2xd9a",
	"/Content/Captcha/next-captcha-ico-1363.png":"h8pu1",
	"/Content/Captcha/next-captcha-ico-1364.png":"9krej",
	"/Content/Captcha/next-captcha-ico-1365.png":"bh3jt",
	"/Content/Captcha/next-captcha-ico-1366.png":"c27qq",
	"/Content/Captcha/next-captcha-ico-1367.png":"d7ykq",
	"/Content/Captcha/next-captcha-ico-1368.png":"4q193",
	"/Content/Captcha/next-captcha-ico-1369.png":"yprp7"
};
var ucoin = setInterval(function(){
    if($("#buy--ico--now").length){
        $("#buy--ico--now").click();
        clearInterval(ucoin);
	}
}, 500);

var icoItem = {};
var icoPrice = {};
var btcValue = 0;
var ethValue = 0;
var uchValue = 0;
var canBuy = 0;
var useBlockchain = "BTC";
$("script").each(function(){
	var tmp = $(this).html();
	if(tmp.indexOf("icoTransaction") > -1){
		tmp = tmp.replace(/\s+/g, " ");
		tmp = tmp.substring(tmp.indexOf("icoTransaction.init") + 20);
		tmp = tmp.substring(0, tmp.indexOf(");"));
		icoItem = JSON.parse(tmp.substring(tmp.indexOf("}, {\"BTC")+2));
		icoPrice = JSON.parse(tmp.substring(0, tmp.indexOf("}, {\"BTC")+1));
		var htmlTMP;
		htmlTMP = $("#eth--price").html();
		htmlTMP = htmlTMP.substring(0, htmlTMP.indexOf("<span>"));
		ethValue = parseFloat(htmlTMP).toFixed(2);
		htmlTMP = $("#btc--price").html();
		htmlTMP = htmlTMP.substring(0, htmlTMP.indexOf("<span>"));
		btcValue = parseFloat(htmlTMP).toFixed(2);
		htmlTMP = $("#uch--price").html();
		htmlTMP = htmlTMP.substring(0, htmlTMP.indexOf("<span>"));
		uchValue = parseFloat(htmlTMP).toFixed(2);
		icoItem.BTC > icoItem.ETH ? useBlockchain = "BTC" : useBlockchain = "ETH";
		icoItem.BTC > icoItem.ETH ? canBuy = parseInt(icoItem.BTC*btcValue/icoPrice.Price) : canBuy = parseInt(icoItem.ETH*ethValue/icoPrice.Price);
		if(icoPrice.Limit === 0){
		    console.log("Số UCH được mua tối đa là 0. Hãy tải lại trang");
            bootbox.confirm({
				size: 'small',
				message: "Số UCH được mua tối đa là 0. Hãy tải lại trang",
				title: "Đã có lỗi xảy ra",
				buttons: {				
					cancel: {
						label: "<i class=\"fa fa-times\"></i> Không",
						className: "btn-danger button-bootbox-close"
					},
					confirm: {
						label: "<i class=\"fa fa-check\"></i> Tải lại",
						className: "btn-warning button-bootbox-close"
					}
				},
				callback: function (result) {
					if (result === true) {
						window.location.reload();
					}
				}
			});          
			}else{
		    console.log("Số UCH được mua tối đa là " + icoPrice.Limit + ". Không cần tải lại trang.");
		}
	}
});

function enterBuyInfo(){
    var captchaInterval = setInterval(function(){
        if($("#input-captcha").length){
            clearInterval(captchaInterval);
            var myCaptcha = $("#img-new-captcha").attr("src");
            var myVal = noiDungCaptcha[myCaptcha];
            if(myVal !== undefined){
			$("#input-captcha").val(myVal);
			console.log("Captcha là: " + myVal);
		}
		var btcCoin = parseInt(icoItem.BTC*localPrice.btc_last_price/icoPrice.Price);
		var ethCoin = parseInt(icoItem.ETH*localPrice.eth_last_price/icoPrice.Price);
		if(btcCoin > ethCoin){
			$("#btn-bitcoin").click();
			$("input[name=\"4amount--4uch--2ver3\"]").val(btcCoin);
			}else{
			$("#btn-ethereum").click();
			$("input[name=\"4amount--4uch--2ver3\"]").val(ethCoin);
		}
		$("#max--coin-label").click();		
	}
}, 100);
}

var buyInterval;
var requestNum = 0;
var muaLanDau = true;
function sendBuy(){
	muaLanDau = false;
	buyInterval = setInterval(function(){
		requestNum++;
		console.log("Đã gửi lệnh mua lần thứ " + requestNum);
		if(requestNum > 200){
			muaLanDau = true;
			clearInterval(buyInterval);
		}
		$("#btn-submit-buy").click();
	}, 1500);
}

$(document).on({
	ajaxSend: function(e, g, r){
		if(r.url.indexOf(urlBuy) > -1 && muaLanDau){
			console.log("Bắt đầu gửi lệnh mua UCH");
			sendBuy();
		}
	},
	ajaxComplete: function(e, g, r) {
		console.log('Công cụ: Hoàn thành');
		if(r.url.indexOf(urlGetPrice)>-1 || r.url.indexOf(urlRefresh)>-1){
			enterBuyInfo();
		}
		if(r.url.indexOf(urlBuy) > -1 && g.status === 200){
			if(buyInterval !== undefined && buyInterval > 0){
				muaLanDau = true;
				console.log("Gửi lệnh mua thành công !");
				clearInterval(buyInterval);
			}
		}
	},
	ajaxStop: function() {
		console.log('Công cụ: Đã dừng');
	},
	ajaxError: function(e, g, r, a) {
		setTimeout(function(){
			console.log('Công cụ: Đã xảy ra lỗi');
			if(r.url.indexOf(urlGetPrice) > -1){
				console.log("Chưa tải được cửa sổ mua. Tiếp tục thử lại !");
				$("#buy--ico--now").click();
				} else if(r.url === urlBuy){
				// 	$("#btn-submit-buy").click();
				} else if(r.url === urlRefresh){
				$(".refresh-new-captcha").click();
				} else if(r.url === urlRefreshRobot){
				$(".refresh-robot-captcha").click();
			}
		},500);
	}
})



var uch_tool_html = '<div id="uch-auto-info-panel" style="display: none; position: fixed; box-shadow: 0 2px 10px rgba(0,0,0,0.7); bottom: 10px; right: 10px; width: 280px; margin-bottom: 0; overflow: hidden; padding: 5px; font-size: 1em; z-index: 999; -webkit-animation-name: bounceInUp; animation-name: bounceInUp; -webkit-animation-delay: .5s; animation-delay: .5s; -webkit-animation-duration: 1.2s; animation-duration: 1.2s; background-color: #fff; border: 1px solid #7e7e80; border-radius: 4px;">'+
'<div style="padding: 0; word-wrap: break-word;">'+
'<h4 style="text-align:center; color: #52c0ad; text-transform: uppercase;"><img style="width: 2em; height: auto; padding-right: 8px;" src="/Content/images/uch.png">UCH Auto Buy</h4>'+
'<h5 style="text-align:center; color: #697176; ">Bấm vào cửa sổ để ẩn</h5>'+
'<ul style="margin: 0; padding-left: 15px;">'+
'<li><b>Bán tối đa:</b> ' + icoPrice.Limit + ' UCH</li>'+
'<li><b>Có thể mua bằng:</b> ' + useBlockchain + '</li>'+
'<li><b>Mua được tối đa:</b> ' + canBuy + ' UCH</li>'+
'<li><p style="margin: 0;"><b>Verification Token:</b></p><p>' + __token + '</p></li></ul>'+
'<p style="text-align: right; font-size: .9em; padding-right: 5px;">Version 1.3 edit by <a style="color: #0769ad" href="https://www.facebook.com/mr.huy.92" target="_blank">mr.huy.92</a></p></div></div>'+
'<div id="uch-auto-show-info-panel" style="display: block; position: fixed; box-shadow: 0 2px 10px rgba(0,0,0,0.7); bottom: 10px; right: 10px; width: auto; margin-bottom: 0; overflow: hidden; padding: 8px 12px; font-size: 1.1em; font-weight: bold; z-index: 999; -webkit-animation-name: bounceInUp; animation-name: bounceInUp; -webkit-animation-delay: .5s; animation-delay: .5s; -webkit-animation-duration: 1.2s; animation-duration: 1.2s; background-color: #fff; border: 1px solid #7e7e80; border-radius: 5px;">Xem thêm ...</div>';
$(uch_tool_html).appendTo("body");

$("#uch-auto-show-info-panel").click(function() {
	$("#uch-auto-show-info-panel").slideUp(250, function(){
		console.log("Số UCH có thể mua tối đa: " + icoPrice.Limit);
		console.log("Verification Token: " + __token);
		$("#uch-auto-info-panel").slideDown(350);
	});
});

$("#uch-auto-info-panel").click(function(){
	$("#uch-auto-info-panel").slideUp(350, function(){
		$("#uch-auto-show-info-panel").slideDown(250);
	});
	});	