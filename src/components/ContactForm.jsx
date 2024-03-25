function ContactForm() {
    return (
        <>
            <div id="contactFormDiv">
                <form>
                    <input type="text" name="name" size ="40" id="name" placeholder="enter your name">

                    </input>
                    <input name="email" type="email" id="email" size="40" placeholder="enter your email">

                    </input>
                    <textarea name="comments" cols="40" rows="2" placeholder="enter a comment"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm