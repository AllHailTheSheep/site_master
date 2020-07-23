/* eslint-disable */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "15.63em";
    document.getElementById("main").style.marginLeft = "15.63em";
}
/* exported openNav */

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
/* exported closeNav */