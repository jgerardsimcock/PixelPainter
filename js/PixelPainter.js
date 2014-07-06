function pixelPainter(width, height) {



  var artboard = $('#artboard');
  var controls = $('#controls'); //this makes the div with id controls a variable that can later be invoked
  var table = $('<table></table>');
  var clickedColor;
  




  for (i=0; i < width; i++){  //this creates/appends divs through a for loop, appending them to 
    var row = $('<tr></tr>');
    table.append(row);
      for (j=0; j < height; j++) {
        var column = $('<td class="cell"></td>');
        row.append(column);
      };
  };

  controls.append(table);
  // artboard.append(table);


  td.click(function() { //this catches the color of the clicked tile.

    console.log("click1")
    clickedColor = $(this).css('background-color');
    console.log(clickedColor);
    });

  cell.click(function(){
      console.log(clickedColor);
      $(this).css("background-color", clickedColor);
  });


};
  
$(document).ready(function(){
  pixelPainter(10,10);
});





