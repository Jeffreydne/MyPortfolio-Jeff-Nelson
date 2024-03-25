function ContactForm() {
    return (
        <>
            <div id="contactFormDiv">
                <form>
                    <fieldset>
                        <legend>Send your contact info and a comment to me</legend>
                        <input type="text" name="name" size ="40" id="name" required placeholder="enter your name">

                        </input>
                        <input name="email" type="email" id="email" size="40" required placeholder="enter your email">

                        </input>
                        <div id="formBottom">
                            <textarea name="comments" cols="40" rows="2" placeholder="enter a comment"></textarea>
                            <button id="btn" type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default ContactForm