import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              earum minima modi, perferendis iure molestias veritatis
              necessitatibus iste rem eum voluptates itaque beatae sed,
              voluptate harum officia laudantium totam corrupti.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
