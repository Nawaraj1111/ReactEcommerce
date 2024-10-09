export const CallUs =()=>{
    return(
        <>
        <h1>Contact Us</h1>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <br /><br />
            <label htmlFor="Address">Address:</label>
            <input type="text" name="address" id="address" />
            <br /><br />
            <label htmlFor="contact">Contact:</label>
            <input type="number" />
            <br /><br />
            <button type="submit">Send Message</button>
        </form>
        </>
    )
}