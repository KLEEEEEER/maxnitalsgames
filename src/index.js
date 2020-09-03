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
