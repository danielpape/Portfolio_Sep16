< script > (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-32006853-1', 'auto');
ga('send', 'pageview'); < /script>


function scrollToSection(nameOfSection) {
    $('html, body').animate({
        'scrollTop': $(nameOfSection).offset().top
    }, 1000);
};
(jQuery);

$(function() {
    // Get the form.
    var form = $('#ajax-content');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: "https://formspree.io/danielwpape@gmail.com",
                // url: $(form).attr('action'),
                data: formData,
                dataType: "json"
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                // $(formMessages).removeClass('error');
                // $(formMessages).addClass('success');
                $(success_message).css('display', 'block');
                $(contactForm).css('display', 'none');

                // Set the message text.
                // $(formMessages).text('Thanks for sending a message');

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#productname').val('');
                $('#productwebsite').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
});
