$(function(){
    var self = this,
        canvas = document.getElementById('snakeCanvas'),
        canvasContext = canvas.getContext('2d'),
        snakeParts = [],
        snakeCollidedWithRightWall = false,
        snakeCollidedWithLeftWall = false,
        snakeCollidedWithTopWall = false,
        snakeCollidedWithBottomWall = false,
        //partMoved = false,
        snake_game = {
            game : this,
            gameProperties : {
                                version     : '0.0.1',
                                revision    : '0.0.0',
                                name        : 'snake'
                             },
                             
            initialisePlayGround : function() {
                var thisGame = this;
                if( canvas ){
                    canvasContext.fillStyle = "green";
                    canvasContext.fillRect( 0, 0, canvas.width , canvas.height );
                    thisGame._drawSnake(10,10);
                    thisGame._bindKeyEvents();
                    
                }
            },
            
            _drawSnake : function( x , y ){
                var thisGame = this;
                for ( var i=1 ; i<6 ; i++){
                    canvasContext.fillStyle = "brown";
                    canvasContext.fillRect(x,y,10,10);
                    x += 12;
                    snakeParts.push({x:x, y:y});
                }
            },
            
            
            _bindKeyEvents : function() {
                var thisGame = this;
                
                var keydown = function(e){
                    switch( e.keyCode ){
                        case 37 : e.preventDefault();
                                  var firstPart = snakeParts[0];
                                  if( (firstPart.x - 12) >= 0 ){
                                    snakeCollidedWithRightWall = false;
                                  }
                                  if( !(snakeCollidedWithRightWall) && (firstPart.x - 12) >= 0 ){
                                    snakeParts = snakeParts.slice( 0, snakeParts.length-1 );
                                    snakeParts.splice(0,0,{x:((firstPart.x)-12), y:firstPart.y});
                                    $.each(snakeParts, function( i,part ){
                                        console.log( part.x, part.y );
                                    });
                                    drawParts();
                                  }
                                  else {
                                    snakeCollidedWithRightWall = true;
                                  }
                                  break;
                        case 38 : e.preventDefault();
                                  var lastPart = snakeParts[snakeParts.length-1];
                                  var firstPart = snakeParts[0];
                                  snakeParts = snakeParts.slice( 0, snakeParts.length-1 );
                                    if( firstPart.y == lastPart.y ){
                                        snakeParts.splice(0,0,{x:((firstPart.x)-12), y:((firstPart.y)-12)});
                                    }
                                    else { 
                                        snakeParts.splice(0,0,{x:firstPart.x, y:((firstPart.y)-12)});
                                    }
                                    drawParts();
                                  break;
                        case 39 : e.preventDefault();
                                  var lastPart = snakeParts[snakeParts.length-1];
                                  if( (lastPart.x + 12) < canvas.width ){
                                    snakeCollidedWithLeftWall = false;
                                  }
                                  if( !(snakeCollidedWithLeftWall) && (lastPart.x + 12) < canvas.width ){
                                    snakeParts = snakeParts.slice(1);
                                    lastPart = snakeParts[snakeParts.length-1];
                                    snakeParts.push({x:((lastPart.x)+12), y:lastPart.y});
                                    drawParts();
                                  }
                                  else {
                                    snakeCollidedWithLeftWall = true;
                                  }
                                  break;
                        case 40 : e.preventDefault();
                                  var lastPart = snakeParts[snakeParts.length-1];
                                  var firstPart = snakeParts[0];
                                  snakeParts = snakeParts.slice(1);
                                   if( firstPart.y == lastPart.y ){
                                        snakeParts.push({x:((lastPart.x)+12), y:((lastPart.y)+12)});
                                    }
                                    else {
                                        snakeParts.push({x:lastPart.x, y:((lastPart.y)+12)});
                                    }
                                    drawParts();
                                  break;
                    }
                }
                
                var click = function(){
                    console.log('clicked');
                }
                
                var keypress = function(e){
                    console.log(e.keyCode+" pressed");
                }
                
                var drawParts = function(){
                        thisGame.clearCanvas();
                        canvasContext.fillStyle = "green";
                        canvasContext.fillRect( 0, 0, canvas.width , canvas.height );
                        $.each(snakeParts, function(){
                                var part = this;
                                //console.log(this.x,this.y);
                                canvasContext.fillStyle = "brown";
                                canvasContext.fillRect( part.x, part.y, 10 ,10 );
                        });
                }
                
                /*var partsInStraightLine = function() {
                        for(var i=0,j=i+1 ; i++, j++ ; i<snakeParts.length){
                            if( snakeParts[i].x ==  snakeParts[j].x )
                        }
                
                }*/
                
                canvas.addEventListener( "click", click , true);
                canvas.addEventListener( "keydown", keydown , true);
               
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
