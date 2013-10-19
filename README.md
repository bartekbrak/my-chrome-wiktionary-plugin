json test address:
    https://raw.github.com/bartekrychlicki/001/master/testdata/en_sample.json

var dictionary = '';

(function($) {
var url = 'https://raw.github.com/bartekrychlicki/001/master/testdata/en_sample.json?callback=?';

$.ajax({
   type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
        console.dir(json.dictionary);
        dictionary = json.dictionary;
    },
    error: function(e) {
        console.log(e.message);
    }
});

})(jQuery);
