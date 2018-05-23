// Waits until the html and css are loaded before running JavaScript
$(document).ready(function(){
  

    //Modal jquery
    // $('#modal fade').modal('toggle');
    // $('#modal-content').modal('show');
    // $('#modal fade').modal('hide');

    $('#exampleModalCenter').on('shown.bs.modal', function () {
      $('#modal-dialog').trigger('focus');
      $('#modal-dialog').css("display", "block");
    })

    // When the first answer button is clicked, it will disappear
    $("#answer1").click(function(){
        $(this).remove();
    });
  
    // When the second answer button is clicked, it will disappear
    $("#answer7").click(function(){
        $(this).remove();
    });
  
    // When the second answer button is clicked, it will disappear
    $("#answer11").click(function(){
        $(this).remove();
    });
    $(".answer").click(function(){
    	$(this).css('background-color', 'red');
    	$(this).html("X");
    });
     $(".help").click(function(){
        $(this).clone().appendTo("#help");
    });
});
   
