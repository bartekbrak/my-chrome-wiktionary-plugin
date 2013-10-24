var dictionary = {};
var url = 'https://raw.github.com/bartekrychlicki/001/master/testdata/en_sample.json?callback=?';

function GetSelectedText () {
    if (window.getSelection) {  // all browsers, except IE before version 9
        var range = window.getSelection ();
        try
          {
            alert(dictionary[range.toString()]['definition']);
          }
        catch(err) {}
    }
    else {
        if (document.selection.createRange) { // Internet Explorer
            var ierange = document.selection.createRange ();
        try
          {
            alert(dictionary[ierange.text]['definition']);
          }
        catch(err) {}
        }
    }
}

$(document).ready(function() {
    $(document).bind("dblclick", GetSelectedText);
    $(document).bind("mouseup", GetSelectedText);

    get_online_dictionary = function(url) {
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
    }; // eo get_online_dictionary
    get_online_dictionary(url);
});




if (window === top) {


}

// notes:
// (function($) {
// })(jQuery);
