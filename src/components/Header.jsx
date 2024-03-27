import portfolioPhoto from '../assets/portfolio-photo.jpg'

function Header({ currentPage, handlePageChange}) {
    // return the desired HTML for the header
    return (
// header will be fixed to top of window with position fixed
    <header>
        <div className="navBar-container">
            {/* navbar container allows contents to align at left and right of header. Will use media queries to align vertically at smaller screen size. */}
            <div className="align-left">
                {/* align-left div is also a flex box allowing header-name div (containing my name & info) to align to the right of the profile photo at al screen sizes */}
                <img id="profile-img" src={portfolioPhoto} alt="Headshot of Jeff Nelson" width="100px" height="100" />
                <div id="header-name">
                    <p>Jeff Nelson</p>
                    <p>Full Stack Software Developer</p>
                </div>
            </div> 
            {/* nav element will be a verticle flex-box at all screen sizes, alowing links to be displayed vertically. WHen clicking on a nav link the onclick function uses the handlePageChange method (defined in portfolioContainer.jsx) to set the current state to reflect that choice, which will rerender the HTML so the clicked on page will render in <main> element and setting the class for that navlink to active, causing it to highlight */}
            <nav>
                <a 
                href="#main-head"
                onClick={() => handlePageChange('Intro')}
                className={currentPage === 'Intro' ? 'active' : 'notActive'}
                >
                    About Me
                </a>
                <a 
                href="#projects-scroll"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'active' : 'notActive'}
                >
                    My Projects
                </a>
                <a href="#contact"
                onClick={() => handlePageChange('ContactForm')}
                className={currentPage === 'ContactForm' ? 'active' : 'notActive'}
                >Contact Me</a>
            </nav>
        </div>
    </header>
    )
}

export default Header