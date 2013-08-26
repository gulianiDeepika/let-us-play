$(function(){
    console.log('document ready');
    var self = this,
        canvas = document.getElementById('snakeCanvas'),
        canvasContext = canvas.getContext('2d'),
        snake_game = {
            game : this,
            snakeParts : [],
            gameProperties : {
                                version     : '0.0.1',
                                revision    : '0.0.0',
                                name        : 'snake'
                             },
                             
            initialisePlayGround : function() {
                var thisGame = this;
                console.log('initialising playground');
                if( canvas ){
                    console.log('canvas not undefined');
                    thisGame._drawSnake(0,0);
                    thisGame._bindKeyEvents();
                }
            },
            
            _drawSnake : function( x , y ){
                var thisGame = this;
                for ( var i=1 ; i<6 ; i++){
                    canvasContext.fillStyle = "#ff0000";
                    canvasContext.fillRect(x,y,10,10);
                    x += 12;
                    thisGame.snakeParts.push({x:x, y:y});
                }
            },
            
            
            _bindKeyEvents : function() {
                console.log('binding key events ');
                var thisGame = this;
                
                var doKeyUp = function(e){
                    //console.log(e.keyCode);
                    switch( e.keyCode ){
                        case 37 : console.log(thisGame.snakeParts);
                                  var firstPart = thisGame.snakeParts[0];
                                  console.log(firstPart,canvas);
                                  if( firstPart.x > 0 ){
                                    thisGame.snakeParts = thisGame.snakeParts.slice( 0, thisGame.snakeParts.length-1 );
                                    firstPart = thisGame.snakeParts[0];
                                    thisGame.snakeParts.push({x:(firstPart.x)-12, y:firstPart.y});
                                    drawParts();
                                  }
                                  break;
                        case 38 : //moveUp();
                                  break;
                        case 39 : //moveRight();
                                  console.log(thisGame.snakeParts);
                                  var lastPart = thisGame.snakeParts[thisGame.snakeParts.length-1];
                                  console.log(lastPart,canvas);
                                  if( lastPart.x < canvas.width ){
                                    thisGame.snakeParts = thisGame.snakeParts.slice(1);
                                    lastPart = thisGame.snakeParts[thisGame.snakeParts.length-1];
                                    thisGame.snakeParts.push({x:(lastPart.x)+12, y:lastPart.y});
                                    drawParts();
                                  }
                                  
                                  break;
                        case 40 : //moveDown();
                                  break;
                    }
                }
                
                var click = function(){
                    console.log('clicked');
                }
                
                var keypress = function(e){
                    console.log(e.keyCode+" pressed");
                }
                
                drawParts = function(){
                        thisGame.clearCanvas();
                        $.each(thisGame.snakeParts, function(){
                                var part = this;
                                canvasContext.fillStyle = "#ff0000";
                                canvasContext.fillRect(part.x,part.y,10,10);
                        });
                }
                
                canvas.addEventListener( "keyup", doKeyUp , true);
                canvas.addEventListener( "click", click , true);
                canvas.addEventListener( "keypress", keypress , true);
                
            
            },
            
            _getRandomPositionForFood : function() {
            
            },
            
            _getStartingPositionForSnake : function() {
            
            },
            
            clearCanvas : function() {
                canvas.width = canvas.width;
            }

        };
    snake_game.initialisePlayGround(); 
    $('#snakeCanvas').focus();
      
}(jQuery));