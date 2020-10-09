(function ($) {
    $(function () {
        var $hrefList = $(".anchor-link li a");
        if ($hrefList.length > 0) {
            var anchorLinks = setAnchorLink();
            setLink(anchorLinks);
        }
    });
    function setAnchorLink() {
        var anchorLinks = [];
        var $hrefList = $(".anchor-link li a");
        $hrefList.each(function (index, element) {
            var href = $(element).attr("href");
            var indexOfAnchorLink = href.lastIndexOf("\#");
            if (indexOfAnchorLink >= 0) {
                var anchorLink = href.substring(indexOfAnchorLink + 1, href.length);
                anchorLinks[$(element).text()] = anchorLink;
            }
        });
        return anchorLinks;
    }

    function setLink(anchorLinks) {
        var $headers = $(":header");
        $headers.each(function (index, element) {
            var headerName = $(element).text().replace(/(^\s*)|(\s*$)/g, "");
            if (anchorLinks.hasOwnProperty(headerName)) {
                $(element).attr('id', anchorLinks[headerName]);
            }
        });
    }
})(jQuery);