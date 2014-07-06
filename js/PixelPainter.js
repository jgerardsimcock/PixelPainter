function pixelPainter(width, height) {



  var artboard = $('#artboard');
  var controls = $('#controls');        //this makes the div with id controls a variable that can later be invoked
  var table1 = $('<table id="table1"></table>');
  var table2 = $('<table id="table2"></table>');
  var colors = [ '#000000', '#003300', '#006600', '#009900', '#00FF00', '#000066', '#003366', '#00FF66', '#333366', '#660066', '#663366', '#660000', '#660033', '＃990000'，'＃999900', '#99FF00', '#CC0000', '#990099', '#996699', '#CC0066', '#CC9966', '#FF0066', '#FFFF66', '#0000CC', '#FF00CC'];
  var clickedColor;



  
  for (var i = 0; i < width; i++){            //this creates table rows through a for loop
    var row = $('<tr></tr>');                  //this initializes a variable for each table row so that it can later be appended to table
    table1.append(row);                       //appends tr's to table

      for (var j = 0; j < height; j++) {      //the loop that iterates the number of times equal to the height of the grid
       var column = $('<td class="cell"></td>'); //this initializes and creates individual columns, 
        row.append(column);             //this appends the columns to each row
      };
  };
  controls.append(table1);             //appends table we just created to the controls div in DOM





for(var i = 0; i < 5; i++){
   var row = $('<tr></tr>'); 
   table2.append(row);

    for (var j = 0; j < 5; j++) {
      var column = $('<td class="cell2"></td>');
        row.append(column);
    };
    for(var i = 0; i < colors.length; i++){
      column.css("background-color", colors[i]);
    };
};
    artboard.append(table2);





  // td.click(function() {                  //initiates the event handler with a click on the color pallette

  //   console.log("click1")
  //   clickedColor = $(this).css('background-color');//this holds the color of the clicked tile in variable clickedColor
  //   console.log(clickedColor);
  //   });

  // cell.click(function(){                //initiates event handler with a click on grid cell
  //     console.log(clickedColor); 
  //     $(this).css("background-color", clickedColor); //transfers color of most recently clickedColor to cell that was just clicked
  // });


};
  
$(document).ready(function(){
  pixelPainter(10,10);
});





