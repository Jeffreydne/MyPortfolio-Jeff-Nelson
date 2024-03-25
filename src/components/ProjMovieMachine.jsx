import movieMachine from '../assets/movieMachine.png'
import noteTaker from '../assets/noteTaker.png'

function ProjMovieMachine() {
    return (
        <>
            <div className="small-card-container">
                <div className="card small">
                    <p className="card-header">Movie Machine</p>
                    <a href="https://gjudilla.github.io/movie-machine/"><img src={movieMachine} alt="The loginpage for Movie Machine"></img></a>
                    <a href="https://github.com/Jeffreydne/movie-machine"><p>Visit the Github repository</p></a>
                    <p className="card-footer">This application allows a user to input the name of any city in the world, and with the click of a button they can get the current weather, and a 5 day forecast for that city.</p>
                </div>
                <div className="card small">
                    <p className="card-header">Note Taker</p>
                    <a href="https://free-note-taker.onrender.com/"><img src={noteTaker} alt="The loginpage for Note Taker"></img></a>
                    <a href="https://github.com/Jeffreydne/note-taker"><p>Visit the github repository</p></a>
                    <p className="card-footer">This application allows a user to input notes, with a title and a text section. The notes will be stored in the cloud until the user deletes the note.</p>
                </div>
            </div>
        </>
    )
}

export default ProjMovieMachine