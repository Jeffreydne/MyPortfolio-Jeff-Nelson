import recipeMama from '../assets/recipeMama.png'
function ProjRecipeMama() {
    return (
        <>
            <div className="small-card-container">
                <div className="card small">
                    <p className="card-header">Recipe Mama</p>
                    <a href="https://recipe-mama-0252d29f9673.herokuapp.com/"><img src={recipeMama} alt="The loginpage for RecipeMama"></img></a>
                    <a href="https://github.com/Jeffreydne/recipe_mama"><p>Visit the github repository</p></a>
                    <p className="card-footer">This application allows a user to input the ingredients they have available for a meal, and with the click of a button they can get the recipe for a meal to cook, using those ingredients.</p>
                </div>
            </div>
        </>
    )
}

export default ProjRecipeMama