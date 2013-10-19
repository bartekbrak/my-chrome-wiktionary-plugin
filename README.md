json test address:
    https://raw.github.com/bartekrychlicki/001/master/testdata/dic.json

(function($) {
var url = 'http://www.jquery4u.com/scripts/jquery4u-sites.json?callback=?';

$.ajax({
   type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       console.dir(json.sites);
    },
    error: function(e) {
       console.log(e.message);
    }
});

})(jQuery);
