import React from "react";
import contactvid from "../videos/contactvid.mp4";
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

function ContactPage() {
  function resetForm() {
    let email = document.querySelector(".emailInput");
    let message = document.querySelector(".messageInput");

    email.value = "";
    message.value = "";
  }

  function onSubmit(event) {
    event.preventDefault();

    let outputStr = `Thanks for your message!`;
    alert(outputStr);

    resetForm();
  }

  return (
    <ContactWrapper>
      <BackgroundWrapper>
        <VideoBg2 autoPlay loop muted src={contactvid} type="video/mp4" />
        <FormWrapper>
          <ContactTitle>I'd Love to Hear From You!</ContactTitle>
          <FormLabel>Your Email Address:</FormLabel>
          <EmailInput
            className="emailInput"
            type="text"
            name="email"
            required
          />
          <FormLabel>Write Your Message Here:</FormLabel>
          <MessageInput
            className="messageInput"
            type="text"
            name="message"
            required
          />
          <SubmitButton type="submit" onClick={onSubmit}>
            Submit
          </SubmitButton>
        </FormWrapper>
      </BackgroundWrapper>
    </ContactWrapper>
  );
}

export default ContactPage;
