import recipeMama from '../assets/recipeMama.png'
import weatherDashboard from '../assets/weatherDashboard.png'

function ProjRecipeMama() {
    return (
        <>
            <div className="small-card-container">
                <div className="card small">
                    <p className="card-header">Weather Dashboard</p>
                    <a href="https://jeffreydne.github.io/weather-dashboard/"><img src={weatherDashboard} alt="The loginpage for Weather Dashboard"></img></a>
                    <a href="https://github.com/Jeffreydne/weather-dashboard"><p>Visit the Github repository</p></a>
                    <p className="card-footer">This application allows a user to input the name of any city in the world, and with the click of a button they can get the current weather, and a 5 day forecast for that city.</p>
                </div>
                <div className="card small">
                    <p className="card-header">Recipe Mama</p>
                    <a href="https://recipe-mama-0252d29f9673.herokuapp.com/"><img src={recipeMama} alt="The loginpage for RecipeMama"></img></a>
                    <a href="https://github.com/Jeffreydne/recipe_mama"><p>Visit the Github repository</p></a>
                    <p className="card-footer">This application allows a user to input the ingredients they have available for a meal, and with the click of a button they can get the recipe for a meal to cook, using those ingredients.</p>
                </div>
            </div>
        </>
    )
}

export default ProjRecipeMama