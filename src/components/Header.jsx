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
            {/* nav element will be a verticle flex-box at all screen sizes, alowing links to be displayed vertically. */}
            <nav>
                {/* This can be fixed later with javascript. For now, scroll to main-head, projects-scroll and contact ids allows the entire about, projects, and contacts to appear when applicable navLink is clicked */}
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
                <a href="#contact">Contact Me</a>
            </nav>
        </div>
    </header>
    )
}

export default Header