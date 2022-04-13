import { Tooltip, Collapse } from 'bootstrap';
import './styles.scss';

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})

// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//     var newCollapseEl = new Collapse(collapseEl, {
//       toggle: false
//     });
//     var navlinksList = [].slice.call(collapseEl.querySelectorAll('.nav-link'));
//     navlinksList.forEach((navlink, i) => {
//         navlink.addEventListener('click', function(){
//             //newCollapseEl.collapse('hide');
//             newCollapseEl.toggle();
//         });
//     });
//     return newCollapseEl;
// })

document.addEventListener("DOMContentLoaded", function() {
    var collapseNavbar = document.getElementById('navbarNavDropdown');
    var navlinksList = [].slice.call(document.querySelectorAll('.navbar-collapse .nav-link'));
    navlinksList.forEach((navlink, i) => {
        navlink.addEventListener('click', function(){
            collapseNavbar.classList.remove("show");
        });
    });
});

console.log("window.innerWidth = " + window.innerWidth);
if (window.innerWidth > 768) {
    let projectsLists = document.querySelectorAll(".projects-list");
    console.log("Found " + projectsLists.length + " projects lists");
    projectsLists.forEach((list) => {
        let elements = list.querySelectorAll(".gameproject");

        for (let i = 0; i < elements.length; i+=2) {
            if (typeof elements[i + 1] === 'undefined') continue;

            console.log(elements[i].style);
            let height1 = elements[i].offsetHeight;
            let height2 = elements[i + 1].offsetHeight;

            if (height1 > height2) {
                elements[i + 1].style.height = elements[i].offsetHeight + "px";
            }
            else {
                elements[i].style.height = elements[i + 1].offsetHeight + "px";
            }
        }
    });
}
