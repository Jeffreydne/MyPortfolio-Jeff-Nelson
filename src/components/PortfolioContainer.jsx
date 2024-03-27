import { useState } from "react";
// import the components to use 
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Intro');
    // renderPage method to determines the state of currentPage based on which "page" is active, determine by what is clicked on in the nav bar, "About Me" is default.
    const renderPage = () => {
        if (currentPage === 'Intro') {
            return <Intro />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'ContactForm') {
            return <ContactForm />
        }
    };
    // The currentPage state property and the handlePageChange method are both passed as props to <Header />. When a page is clicked on in the header, handlePageChange is called which will reset the state to the clicked on page and then use the renderPage method to return the appropriate .jsx file to render based on the state
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <Footer />
        </>
    );
}