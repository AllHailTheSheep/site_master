
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "15.63em";
    document.getElementById("main").style.marginLeft = "15.63em";
    document.getElementById("menubtn").classList.remove("menubtn");
    document.getElementById("menubtn").className = "hidden";
}
/* exported openSidebar */

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menubtn").classList.remove("hidden");
    document.getElementById("menubtn").className = "menubtn";
}
/* exported closeSidebar */