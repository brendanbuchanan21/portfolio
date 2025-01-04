


const NavBar = () => {
    const scrollToSection = (className: string) => {
        const section = document.querySelector(`.${className}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
        }
    };
    return (
        <nav>
            <div className="nav-name-container">
                <p className="name-top">Brendan Buchanan</p>
            </div>
            <div className="navigation-link-container">
                <p className="navigation-link" id="nav-services"  onClick={() => scrollToSection("services-section")}>Services</p>
                <p className="navigation-link" id="nav-projects"onClick={() => scrollToSection("projects-section")}>Projects</p>
                <p className="navigation-link" id="nav-contact"><a href="mailto:brendanbuchanan21@gmail.com">Contact</a></p>
            </div>
        </nav>
    )
}

export default NavBar;