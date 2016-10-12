/**
 * Created by christopherli on 9/14/16.
 */
$(document).ready(function(){

    var shift = 1;

    $("#button").on('click', function(){

        var searchTxt = $('#search').val();
        var apiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
        var apiRest = "&limit=20&format=json&callback=?";

        var apiCall = apiLink + searchTxt + apiRest;

        if(shift && searchTxt) {
            $("#page-wrapper").animate({top: '-=200px'}, 2000);
            shift = 0;
        }

        $.getJSON(apiCall, function(list){

            $('#entries').html('');
            $('#entries').hide();

            for(var i = 0; i < list[1].length; i++) {

                var title = list[1][i];
                var description = list[2][i];
                var link = list[3][i];

                var item = '<a class="item-link" href="' + link + '"><div class="item hvr-glow"><h3>' + title + '</h3><p>' + description + '</p></div></a>';

                $('#entries').append(item);
                

            }

            $('#entries').fadeIn('slow');

        });
        
    });
    
});