import { useState } from "react";
// import the components to use 
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';
// import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Intro');
    // use renderPage method to determine the state of currentPage and return the appropriate .jsx file to render based on the state
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

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <Footer />
        </>
    );
}