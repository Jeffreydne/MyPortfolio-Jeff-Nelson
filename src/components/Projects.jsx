import NPSwebsite from '../assets/NPSwebsite.png'
import ProjRecipeMama from './ProjRecipeMama';
import ProjMovieMachine from './ProjMovieMachine';

function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            {/* card-container div holds all 3 projects. The small-car-container below will hold the 2 non-featured projects & flex them horizontally at large screen sizes, changing to vertical at mobile size */}
            <div className="card-container">
                {/* class card divs allow the card elements (card-header, atag with image & card-footer with description) to align vertically using flexbox. */}
                <div className="card">
                    <p className="card-header">Fun WIth National Parks</p>
                    <a className="nps" href="https://jeffreydne.github.io/national-park-blog-yellowstone/"><img id="featured-project" src={NPSwebsite} alt="National Park Blog (featuring Yellowstone)"/></a>
                    <p className="card-footer">This project represents the 1st episode of a weekly blog, featuring a different National Park each week. This 1st week features Yellowstone. It contains a signup & information page, an about the park page, and a page with a timed quiz, about the park, for the user to take.</p>
                </div>
            </div>
            <ProjRecipeMama />
            <ProjMovieMachine />
        </section>
    )
}
export default Projects;