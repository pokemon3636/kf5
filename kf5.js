//因为为了获取user_id所以用windows.load
window.onload = function () {
	if ($("[class='needlogin iframeFormbridge']").length === 1) {
		if ($('.user-info-name [href]').length > 0) {
			var url = encodeURIComponent(window.location.href);
			var hostname = window.location.host;
			window.location.href = "https://" + hostname + "/user/login/?request=" + url;
		}
		else {
			var $iframe = $('.iframeFormbridge');
			$iframe[0].contentWindow.postMessage(user_id, '*');
		}
	}
}


$(function () {
	if ($("[class='needlogin iframeFormbridge']").length === 1) {
		$("#article-comments, .share-list, .next_prev_wrap, .next_prev_wrap").hide();
	}
});
