function pixelPainter(width, height) {


  this.artboard = $('<div id=pixelPainter_artboard></div>'); //creates variable for #artboard
  var grid = $('<table id="grid"></table>');    //creates variable for table, that creates a table and that will appended to #artboard 

  this.controls = $('<div id=pixelPainter_controls></div>');        //creates variable for #controls
  var palette = $('<table id="palette"></table>'); //creates variable and a table for pallette that will be appended to #controls
  
  //COLOR ARRAY
  var colors = ['#000000', '#003300', '#006600', '#009900', '#00FF00', '#000066', '#003366', '#00FF66', '#333366', '#660066', '#663366', '#660000', '#660033', '#990000', '#800000', '#99FF00', '#CC0000', '#990099', '#996699', '#CC0066', '#CC9966', '#FF0066', '#FFFF66', '#0000CC', '#FF00CC'];
  var clickedColor;             //EMPTY VAR THAT HOLDS THE COLOR OF LAST COLOR CLICKED
    console.log(colors.length);

  var erase = $('<button id="erase" value="Erase">Erase</button>'); //initializes Erase button
  var clear = $('<button id="clear" value="Clear">Clear</button>'); //initializes Clear button

  $('body').append(erase);
  $('body').append(clear);
 

  //THIS IS THE BLANK GRID

  for (var i = 0; i < width; i++){                //this creates table rows through a for loop
    var row = $('<tr></tr>');                     //this initializes a variable for each table row so that it can later be appended to table
      grid.append(row);                           //appends tr's to table
      for (var j = 0; j < height; j++) {          //the loop that iterates the number of times equal to the height of the grid
       var column = $('<td class="grid-cell"></td>');  //this initializes and creates individual columns,
        row.append(column);                       //this appends the columns to each row
      };
  };

  artboard.append(grid);                          //appends table we just created to the artboard div in DOM

  


  //THIS CREATES THE COLOR CONTROL PALETTE

  var m = 0 //This sets the color counter at INDEX zero

  for(var k = 0; k < 5; k++){ 
   var row = $('<tr></tr>'); 
    palette.append(row);
    for (var l = 0; l < 5; l++) {
      var column = $('<td class="palette-cell"></td>');
        row.append(column);
        column.css({'background-color': colors[m]});   //THIS SETS BACKGROUND COLOR TO THE VALUE AT COLORS[M]
        m++;    //THIS TELLS THE PROGRAM TO CHANGE THE VALUE OF M WHICH HLEPS MOVE THROUGH THE COLOR ARRAY
    };
  };

  controls.append(palette); //appends palette table we just created to the controls div in DOM



  //THIS SECTION TRANSFERS COLOR FROM THE PALETTE TO THE GRID

  $("#controls").on('click', '.palette-cell', function() {     //initiates the event handler with a click on the color pallette
    console.log("this");
    clickedColor = $(this).css('background-color');           //this holds the color of the clicked tile in variable clickedColor
    });

  $("#artboard").on('click', '.grid-cell', function(){       //initiates event handler with a click on grid cell
    $(this).css("background-color", clickedColor);           //transfers color of most recently clickedColor to cell that was just clicked
  });

  // THIS REMOVES THE LAST COLOR CLICKED

  erase.click(function(){
    console.log("this")
    $(this).css('background-color', "");
    clickedColor = "";
  });

  //THIS SECTION REMOVES ALL COLORS FROM GRID

  clear.click(function(){
    $('.grid-cell').css("background-color", "white");
  });

  return this;
};       
    


$(document).ready(function(){
  var pixelPainterVariable = pixelPainter(10,10);
  $("#controls").append(pixelPainterVariable.controls);
  $("#artboard").append(pixelPainterVariable.artboard);
});





