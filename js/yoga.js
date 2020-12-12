$(document).ready(function() {
    $(".content").slice(0, 3).show();                /* Displays the first 3 divs*/
      $("#loadMore").on('click', function (e) {       /*Click event for load more */
        e.preventDefault();
        $(".content:hidden").slice(0, 3).show();     /* Select the next 3 divs and display them */
        if ($(".content:hidden").length == 0) {      /* Check if any hidden divs exist */
          $("#loadMore").fadeOut('slow');            /* Fade out the button if there are none left */
        }
    });
});