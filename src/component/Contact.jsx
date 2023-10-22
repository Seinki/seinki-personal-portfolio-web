// import personalData from '../personalData.json';

export default function Contact() {
  return (
    <section className="container">
      <div className="contact">
        <div className="contact-title about-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-content">
          {/* <!-- input user --> */}
          <form
            id="contact-form"
            action="https://formspree.io/f/moqoekoq"
            method="POST"
            className="contact-forms"
          >
            <div className="input-container">
              <label
                htmlFor="name"
                className="name-label"
              >
                Name
              </label>
              <input
                className="name-input"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="input-container">
              <label
                htmlFor="email"
                className="email-label"
              >
                Email
              </label>
              <input
                className="email-input w-full px-4 py-2 bg-blue-100 rounded-md focus:ring-blue-950"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="input-container">
              <label
                htmlFor="message"
                className="message-label"
              >
                Message
              </label>
              <textarea
                className="textarea-input"
                name="message"
                id="message"
                cols="30"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="">
              <button className="button-send-email" type="submit">
                Send Email
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </section>
  )
}