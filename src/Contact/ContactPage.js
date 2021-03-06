// import { render } from "@testing-library/react";
import React from "react";
import contactvid from "../videos/contactvid.gif";
// import Axios from "axios";
import {
  ContactWrapper,
  BackgroundWrapper,
  VideoBg2,
  FormWrapper,
  EmailInput,
  MessageInput,
  SubmitButton,
  ContactTitle,
  FormLabel,
} from "./ContactStyle";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  // resetForm() {
  //   let email = document.querySelector(".emailInput");
  //   let message = document.querySelector(".messageInput");

  //   email.value = "";
  //   message.value = "";
  // }

  handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    event.preventDefault();

    let outputStr = `Thanks for reaching out! I'll be in touch with you soon.`;
    alert(outputStr);

    let email = document.querySelector(".emailInput");
    let message = document.querySelector(".messageInput");
    let name = document.querySelector(".nameInput");

    email.value = "";
    message.value = "";
    name.value = "";
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <ContactWrapper>
        <BackgroundWrapper>
          <VideoBg2 autoPlay loop muted src={contactvid} type="image/gif" />
          <FormWrapper
            onSubmit={this.handleSubmit}
            name="contact"
            // method="post"
            // action="/Contact"
            data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <ContactTitle>I'd Love to Hear From You!</ContactTitle>

            <FormLabel>Full Name:</FormLabel>
            <EmailInput
              className="nameInput"
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />

            <FormLabel>Email Address:</FormLabel>
            <EmailInput
              className="emailInput"
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <FormLabel>Write Your Message Here:</FormLabel>
            <MessageInput
              className="messageInput"
              type="text"
              name="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />

            <SubmitButton
              name="submit"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Send
            </SubmitButton>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">
                Thanks for reaching out! I'll be in touch with you soon.
              </p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">
                Uh oh! Something's not quite right. Please try again.
              </p>
            )}
          </FormWrapper>
        </BackgroundWrapper>
      </ContactWrapper>
    );
  }
}

export default React.memo(ContactPage);
