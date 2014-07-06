function PixelPainter(width, height) {


  var cell = $('<div class="cell"></div>'); //this creates divs dynamically in jquery

  var artboard = $('#artboard');
  var controls = $('#controls'); //this makes the div with id controls a variable that can later be invoked
  var td = $('td');
  var row = $('<tr></tr>');

  for(i=0; i<10; i++){
  var row1 = $('<td></td>').addClass('bar').text('result ' + i);
    row.append(row1);
  }
for (var j = 0; j < 6; j++){ //this creates/appends divs through a for loop, appending them to 

}

  
$(document).ready(function(){
  PixelPainter(20,20);
});


// var clickedColor;

//   td.click(function() {

//     console.log("click1")
//     clickedColor = $(this).css('background-color');
//     console.log(clickedColor);
//     });

//   cell.click(function(){
//       console.log(clickedColor);
//       $(this).css("background-color", clickedColor);
//   });

// };