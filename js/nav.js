$(function(){

     $('#menuIcon').click(function() {
        $('#menuIcon').toggleClass('active');
        $('nav, nav ul').toggleClass('shown');
    });

    // Binding an event handler to all anchors that contain
    // a hash (#), but not necessarily JUST a hash - like href="#"
    // which is typically used in JS...

    $('a[href*="#"]:not([href="#"])').click(function() {

        // Two conditional checks
        // First:
        // location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        // What we're doing is replacing the first forward slash (/) in the pathname
        // for the current location and comparing it to the link that's been clicked.
        // So http://personalsite.com/test/link/src, which normally would have
        // a pathname of /test/link/src would be test/link/src

        // The or check (||) is to see if the link matches the current domain
        // location.hostname == this.hostname

        // Basically, we want an internal anchor for the page we're on.

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            // Assigning the variable target, with the hash of the link that's been clicked
            // which is conveniently enough, a jquery selector for IDs (i.e. #hash)
            var target = $(this.hash);

            // We check the target length - basically, does the element exist?
            // If length equals to 0, we query the DOM by name attribute. Otherwise, we just re-assign target to self.
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // The rest is self explanatory... (animation  using the target's offset)
            // The return false prevents default behavior

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});