function openSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "15.63em";
    document.getElementById("main").style.marginLeft = "15.63em";
    document.getElementById("menubtn").classList.remove("menubtn");
    document.getElementById("menubtn").className = "hidden";
}
/* exported openSidebar */

function closeSidebar() {
    "use strict";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menubtn").classList.remove("hidden");
    document.getElementById("menubtn").className = "menubtn";
}
/* exported closeSidebar */