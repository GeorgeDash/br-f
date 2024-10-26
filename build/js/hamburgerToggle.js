function hamburgerToggle() {
    var toggleElement = document.getElementById("hamburger-toggle");
    var navElement = document.getElementById("categories");
    var isExpanded = toggleElement.getAttribute("aria-expanded") === "true";

    // Check the viewport width
    if (window.innerWidth <= 992) {
        // Toggle the aria-expanded attribute
        var newExpandedState = !isExpanded; // flip the boolean
        toggleElement.setAttribute("aria-expanded", newExpandedState);
        
        // Show or hide the navigation based on the new state
        if (newExpandedState) {
            navElement.style.display = "flex"; // Show the navigation as flex
        } else {
            navElement.style.display = "none"; // Hide the navigation
        }
    }
}
