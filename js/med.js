$(document).ready(function() {
    $(".row img").each(function() {
        var oldURL = $(this).attr("src");      // src attribute refers to original image
        var newURL = $(this).attr("id");        // id attribute refers to image after hover
        
        // creates a new Image object	
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        
        $(this).hover(                        // function on hover 
            function() {
                $(this).attr("src", newURL);      // sets new image
                $(this).css({"width": "80%","display": "block","margin":"auto"}); // sets the css attributes
            },
            function() {
                $(this).attr("src", oldURL);   // sets old image
            }
        );  
    }); 
}); 


