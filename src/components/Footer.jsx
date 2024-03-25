import ContactForm from "./ContactForm";

function Footer() {
    // return the desired HTML for the footer
    return (
        <footer id="contact">
            <div className="navBar-container">
                <div>
                    <h2>Contact Me</h2>
                    <p>Jeff Nelson</p>
                    <p>email: jeffreydne@gmail.com</p>
                </div>
                <ContactForm />
                <div>
                    <h2>Links to me</h2>
                    <a href="https://github.com/Jeffreydne"><p>Github</p></a>
                    <a href="https://www.linkedin.com/in/jeffrey-nelson13/"><p>LinkedIn</p></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer