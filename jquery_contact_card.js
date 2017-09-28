/* This jquery will take user input from within a form
* and use it to create individual contact cards
* that contain Name (initially shown) and Description(initially hidden)
*/


$(document).ready(function() {
    $("form").submit(function() {
        var first= $('#first_name').val();
        var last= $('#last_name').val();
        var description= $('textarea').val();

        $('.right_box').append('<div class="contact_card"><h1>' + first + " " + last + '</h1><h2>click for description</h2><p>' + description + '</p></div>');
        $('p').hide();
 
        $("input").val("");
        $('textarea').val("");
        return false;
    });
    $(document).on("click",".contact_card",function() {
        if ($('p').is(":hidden")) {
            $('h1').hide();
            $('h2').hide();
            $('p').show();
        }
        else {
            $('p').hide();
            $('h1').show();
            $('h2').show();
        };
    });
});




