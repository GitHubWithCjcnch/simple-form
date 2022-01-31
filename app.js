document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const expandMoreIcon = document.querySelector('.expand-more-icon');
    let currentDropdown;
    
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;
    
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        expandMoreIcon.classList.toggle('active'); 
    }
    
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        expandMoreIcon.classList.remove('active');
    }); 
});
