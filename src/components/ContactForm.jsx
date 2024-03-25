function ContactForm() {
    return (
        <>
            <div id="contactFormDiv">
                <form>
                    <fieldset>
                        <legend>Send your contact info and a comment to me</legend>
                        <input type="text" name="name" size ="40" id="name" placeholder="enter your name">

                        </input>
                        <input name="email" type="email" id="email" size="40" placeholder="enter your email">

                        </input>
                        <textarea name="comments" cols="40" rows="2" placeholder="enter a comment"></textarea>
                        <button id="btn" type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default ContactForm