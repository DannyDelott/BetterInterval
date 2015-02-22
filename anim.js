
// put elements on page
document.write('<link rel=\"stylesheet\" type=\"text\/css\" href=\"style.css\">');
document.write('<div class=\"circle clearclick\"><div class=\"arc\"><\/div><\/div>');

/* ******************
 * GLOBAL VARIABLES *
 * ******************/
window.$circle = $('.circle');
window.$arc = $('.arc');

/* ******************
 * GLOBAL FUNCTIONS *
 * ******************/

window.betterInterval = function(execute, timeout, delayFirst) {
  execute.stop = false;
  execute.stopped = false;
  if(delayFirst){ execute(); }
  (function subroutine() {
    setTimeout(function() {
      if(!execute.stop){
        execute();
        subroutine();
      }else{ execute.stopped = true; }
    }, timeout);
  })();
};
window.rotateArc = function(){
  $arc.toggleClass('counterclockwise');
  $arc.toggleClass('clockwise');  
};


/* **************
 * BEGIN JQUERY *
 * **************/

$(function(){

  /* ****************
   * EVENT HANDLERS *
   * ****************/

  $circle.on('click', function(){
    $circle.toggleClass('clearclick');
    $circle.toggleClass('click');
    if(rotateArc.stopped){
//    console.log('restart arc');
      betterInterval(rotateArc, 2000);
    }else { 
//    console.log('stop arc');
      rotateArc.stop = true;
    }
  });
  
  $circle.on('click', function(){
    $arc.toggleClass('pause');
  });

  /* **************
   * DEFAULT CODE *
   * **************/


  $arc.toggleClass('clockwise');
  betterInterval(rotateArc, 2000, true);
   
});
