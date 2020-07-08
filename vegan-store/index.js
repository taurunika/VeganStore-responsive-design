var menuToggle = document.getElementById("menu-toggle-icon");
var sideBarWrapper = document.getElementById("sidebar-wrapper");
var overlay = document.getElementById("overlay");

overlay.onclick = function () {
    sideBarWrapper.style.display = "none";
};

menuToggle.onclick = function () {
    sideBarWrapper.style.display = "block";
};

var dropdown = document.getElementById("demo-pages-menus");
var demoDropdown = document.getElementById("demo-dropdowns");

dropdown.addEventListener("mouseover", function () {
    demoDropdown.style.display = "block";
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.marginTop = "165px";

});

dropdown.addEventListener("mouseout", function () {
    demoDropdown.style.display = "none";
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.marginTop = "0px";
});
