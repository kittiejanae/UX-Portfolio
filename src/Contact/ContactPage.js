// import { render } from "@testing-library/react";
import React from "react";
import contactvid from "../videos/contactvid.gif";
import Axios from "axios";
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

  //  resetForm() {
  //   let email = document.querySelector(".emailInput");
  //   let message = document.querySelector(".messageInput");

  //   email.value = "";
  //   message.value = "";
  // }

  // onSubmit(event) {
  //   event.preventDefault();

  //   let outputStr = `Thanks for reaching out! I'll be in touch with you soon.`;
  //   alert(outputStr);

  //   resetForm();
  // }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ disabled: true });

    Axios.post("http://localhost/3000/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <ContactWrapper>
        <BackgroundWrapper>
          <VideoBg2 autoPlay loop muted src={contactvid} type="image/gif" />
          <FormWrapper onSubmit={this.handleSubmit}>
            <ContactTitle>I'd Love to Hear From You!</ContactTitle>

            <FormLabel>Full Name:</FormLabel>
            <EmailInput
              className="nameInput"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />

            <FormLabel>Email Address:</FormLabel>
            <EmailInput
              className="emailInput"
              type="text"
              name="email"
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

            <SubmitButton type="submit" disabled={this.state.disabled}>
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

export default ContactPage;
