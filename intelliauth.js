var cookie_en = navigator.cookieEnabled;
var java_en = navigator.javaEnabled();
var useragent_str = navigator.userAgent;
var screen_depth = screen.colorDepth;
var screen_size = screen.width + "x" + screen.height;
var plugins_info = navigator.plugins.length;
var timezone_off = (new Date()).getTimezoneOffset();
var geolocation_ll;
navigator.geolocation.getCurrentPosition(show_map);
    
    function show_map(position) {
        geolocation_ll = position.coords.latitude + " x " + position.coords.longitude;
        $("#MainContent_TextBoxi9").val(geolocation_ll);
    }

// Test code to display data values obtained in some text fields.
    window.onload = function() {
        $("#MainContent_TextBoxi1").val(cookie_en);
        $("#MainContent_TextBoxi2").val(java_en);
        $("#MainContent_TextBoxi3").val(useragent_str);
        $("#MainContent_TextBoxi4").val(screen_depth);
        $("#MainContent_TextBoxi5").val(screen_size);
        $("#MainContent_TextBoxi6").val(timezone_off);
        $("#MainContent_TextBoxi7").val(plugins_info);
    }