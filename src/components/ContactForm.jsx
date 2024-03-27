function ContactForm() {
    return (
        <div id="contactFormDiv">
            <div>
                <h2>Contact Me</h2>
                <p>Jeff Nelson</p>
                <p>email: jeffreydne@gmail.com</p>
            </div>
            <form>
                <fieldset>
                    <legend>Send your contact info and a comment to me</legend>
                    <input type="text" name="name" size ="40" id="name" required placeholder="enter your name">

                    </input>
                    <input name="email" type="email" id="email" size="40" required placeholder="enter your email">

                    </input>
                    <div id="formBottom">
                        <textarea name="comments" cols="80" rows="2" placeholder="enter a comment"></textarea>
                        <button id="btn" type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ContactForm