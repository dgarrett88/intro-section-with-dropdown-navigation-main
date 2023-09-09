const expandMenu = (event) => {
    const currentMenuId = event.currentTarget.dataset.menu;

    // Close all menus OTHER THAN the current menu
    const allMenus = document.querySelectorAll('.features-menu, .company-menu');
    allMenus.forEach(menu => {
        if (menu.classList.contains(currentMenuId)) return;  // Skip the current menu
        menu.classList.remove('show');
        menu.classList.add('hidden');
    });

    // Reset all arrow icons
    const allArrows = document.querySelectorAll('.arrow-icon');
    allArrows.forEach(arrow => {
        arrow.src = "/images/icon-arrow-down.svg";
    });

    // Toggle the current menu and its arrow icon
    const menuToToggle = document.querySelector(`.${currentMenuId}`);
    const arrowIcon = event.currentTarget.querySelector('.arrow-icon');
    
    if (menuToToggle.classList.contains('hidden')) {
        menuToToggle.classList.remove('hidden');
        menuToToggle.classList.add('show');
        arrowIcon.src = "/images/icon-arrow-up.svg";
    } else if (menuToToggle.classList.contains('show')) {
        menuToToggle.classList.remove('show');
        menuToToggle.classList.add('hidden');
        arrowIcon.src = "/images/icon-arrow-down.svg";
    }

    // Stop the event from bubbling up
    event.stopPropagation();
}




// New function to handle clicks outside the menus
document.addEventListener('click', (event) => {
    const featuresMenu = document.querySelector('.features-menu');
    const companyMenu = document.querySelector('.company-menu');
    
    if (!featuresMenu.contains(event.target) && !companyMenu.contains(event.target)) {
        if (featuresMenu.classList.contains('show')) {
            featuresMenu.classList.remove('show');
            featuresMenu.classList.add('hidden');
        }
        if (companyMenu.classList.contains('show')) {
            companyMenu.classList.remove('show');
            companyMenu.classList.add('hidden');
        }
    }
});

// Prevent the document click event from being triggered when the menus themselves are clicked
document.querySelector('.features-menu').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.querySelector('.company-menu').addEventListener('click', (event) => {
    event.stopPropagation();
});
