const Contact = () => {
  return (
    <section className="page">
      <h1>Contact Me</h1>
      <br/>
      <br/>
      <form>
        <input className="contactInputs" name="name" placeholder="Name"></input>
        <br/>
        <input className="contactInputs" name="email" placeholder="Email"></input>
        <br/>
        <textarea className="contactMessage" name="message" placeholder="Message"></textarea>
        <br/>
        <button className="contactButton">Send</button>
      </form>
    </section>);
}

export default Contact;
