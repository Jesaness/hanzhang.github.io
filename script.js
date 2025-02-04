// This script dynamically adds the "active" class based on the current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navbarLinks = document.querySelectorAll('.navbar a');
    
    navbarLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});
