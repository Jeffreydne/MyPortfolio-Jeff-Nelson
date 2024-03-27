# MyPortfolio-Jeff-Nelson
My portfolio - written with React

---

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 

| JavaScript     | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Node.js | [https://nodejs.org/](https://nodejs.org/)     |
| NPM | [https://www.npmjs.com](https://www.npmjs.com)   |
| React | [https://react.dev/](https://react.dev/)   |

---

## Badges
![Static Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

---

## Description

[Visit the Github repository](https://github.com/Jeffreydne/MyPortfolio-Jeff-Nelson)

[Visit the deployed site](XXXXXXXXXXXXXXXXXX)

This portfolio allows a user to see my skills and accomplishments inthe field of software development. 

---

## Instalation

No installation needed. 

---

## Code Example

The three code examples below show how React is used to implement various aspects of my portfolio.

The following javascript snippet shows how the renderPage method is used in the ProjectContainer.jsx component to return a different page to the main element depending on what the state of currentPage is:

```JS
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
```
The following line shows how the currentPage state property and the handlePageChange method are both passed as props to the Header component. When a page is clicked on in the nav section of the header, handlePageChange is called which will reset the state to the clicked on page and then use the renderPage method to return the appropriate .jsx file to render within the main element, based on the state
```JS

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <Footer />
        </>
    );
}

```
The following code is from the Header.jsx component. It shows how the handlePageChange method is called when the About Me nav link is clicked on. This method sends 'intro' as an argument when calling the function in the code above, thereby changing the state to "intro', and it also sets the class to active which highlights the nav link element in the header so the highlighted link corresponds to the page being displayed. The same code concept is used for the other 2 links as well. 

```JS
  <nav>
                <a 
                href="#main-head"
                onClick={() => handlePageChange('Intro')}
                className={currentPage === 'Intro' ? 'active' : 'notActive'}
                >
                    About Me
                </a>
                {...}

```



## Usage

This website is designed to allow a user see my portfolio so they can learn about my skills and accomplishments in the world of software development. A user can see various projects I have done individually, and others I have colaborated on. My contact information is also available.

---

## Author Info

### Jeffrey Nelson


* [Portfolio](https://jeffreydne.github.io/Jeff-Nelson-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/jeffrey-nelson13/)
* [Github](https://github.com/Jeffreydne)

---
## Credits

  This application was built from scratch. I have used many of the strategies taught by the excellent instructors at the UC Berkeley Extension Full Stack coding bootcamp. In this case I used variations of methods taught in unit 20, which deals with React and Vite npm.  Finally, I copied open source badges from Vedant Chainani at the website https://dev.to/envoy_/150-badges-for-github-pnk#contents 
