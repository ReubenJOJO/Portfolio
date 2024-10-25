// Function to set the active link based on the current URL
function setActiveNavLink() {
    // Get the current page's URL
    const currentUrl = window.location.pathname;

    // Define the navigation links and their corresponding URLs
    const navLinks = [
        { id: 'nav-homepage', url: '/homepage.html' },
        { id: 'nav-portfolio', url: '/portfoliopage.html' },
        { id: 'nav-resume', url: '/resumepage.html' },
        { id: 'nav-contact', url: '/contactpage.html' },
    ];

    // Loop through the nav links and set the active class if the URL matches
    navLinks.forEach(link => {
        const navElement = document.getElementById(link.id);
        if (navElement && currentUrl.endsWith(link.url)) {
            navElement.classList.add('active');
        } else {
            navElement.classList.remove('active');
        }
    });
}

// Call the function to set the active link on page load
window.onload = setActiveNavLink;
