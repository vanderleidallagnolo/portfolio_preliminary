document.addEventListener("DOMContentLoaded", function() {
	  
    var draggable = document.getElementById("draggable");
    var handler = document.getElementById("handler");
    
    // initialize some variables
    var dragging = false; // whether the handler is being dragged
    var startX = null; // the initial x position of the mouse when dragging starts
    var startWidth = null; // the initial width of the draggable element when dragging starts
    
    // add an event listener for mousedown on the handler
    handler.addEventListener("mousedown", function(event) {
      // prevent default behavior
      event.preventDefault();
      
      // set the dragging flag to true
      dragging = true;

      // store the initial x position of the mouse and the initial width of the draggable element
      startX = event.clientX;
      startWidth = parseInt(window.getComputedStyle(draggable).width);
    });
    
    //}
    
    document.addEventListener('mousemove', function(e) {
    
        if (dragging) { // only execute if dragging is true
        
            // calculate how much the mouse has moved horizontally since dragging started
            var deltaX = event.clientX - startX;

            // calculate and set the new width of the draggable element based on deltaX and startWidth
            var newWidth = startWidth + deltaX;

            // constrain newWidth to be within [0, container's width]
            newWidth = Math.max(0, Math.min(newWidth, window.innerWidth));

            draggable.style.width = newWidth + "px";
            handler.style.right = "-100%";
      
       }
    
    });
    
    document.addEventListener('mouseup', function() {

         if (dragging) { // only execute if dragging is true

             // set dragging flag to false 
             dragging = false;

             // reset startX and startWidth to null 
             startX = null; 
             startWidth = null; 
             
        }
      
    });

  });