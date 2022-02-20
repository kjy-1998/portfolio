$(function () {
    if (undefined == $.cookie('cookies'))
        $('#cookies').slideDown(500);
    $('#cookies .cookies_button').click(function (e) {
        e.preventDefault();
        $.cookie(
            'cookies',
            'ok', {
                expires: 1,
                path: '/'
            }
        );
        $('#cookies').slideUp(500);
    });
});