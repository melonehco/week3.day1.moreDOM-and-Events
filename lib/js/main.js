/*
 * based on https://www.w3schools.com/howto/howto_js_draggable.asp
 */

let posX;
let posY;
let elem; //current elem being dragged
let styleX; //accumulate dragging here
let styleY;

/* start dragging */
function dragMouseDown( e )
{
    elem = e.target;
    
    posX = e.clientX;
    posY = e.clientY;

    //if our first time moving
    if ( !elem.style.top )
    {
        elem.style.top = "0px";
        elem.style.left = "0px";
        styleX = 0;
        styleY = 0;
    }

    document.onmouseup = closeDragElement; //stops dragging
    document.onmousemove = elementDrag; //handles dragging in progress
}

/* updates element position */
function elementDrag( e )
{
    // e = e || window.event;
    // e.preventDefault();

    const dx = e.clientX - posX;
    const dy = e.clientY - posY;

    //from example, but only works w/ position: absolute
    // elem.style.top = (elem.offsetTop + dy) + "px";
    // elem.style.left = (elem.offsetLeft + dx) + "px";

    styleX += dx;
    styleY += dy;
    elem.style.left = styleX + "px";
    elem.style.top = styleY + "px";

    posX = e.clientX;
    posY = e.clientY;
}

/* removes event callbacks that run dragging */
function closeDragElement()
{
    document.onmouseup = null;
    document.onmousemove = null;
}

//elem = document.getElementById( "weapons" );
//elem.addEventListener( "mousedown", dragMouseDown );
//elem.onmousedown = dragMouseDown;

//attach dragMouseDown to all article elements
const articles = document.querySelectorAll( "article" );
for ( a of articles )
{
    a.onmousedown = dragMouseDown;
}

/*
on click, check whether in element?
or give each article an onclick event listener and handler
while dragging, change article position
set all article to absolute positions

reset on space:
set all style.top & left to 0
*/