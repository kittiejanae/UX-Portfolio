import styled from "styled-components";

export const ContactWrapper = styled.div``;

export const BackgroundWrapper = styled.div`
  width: 80vw;
  height: 120vw;
  border-radius: 12px;
  margin-top: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8vw;

  @media screen and (min-width: 768px) {
    max-height: 55vw;
    margin-top: 4vw;
    margin-bottom: 24vw;
  }
`;

export const VideoBg2 = styled.video`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(
    101.88deg,
    rgba(13, 66, 21, 0.8) 0.81%,
    rgba(13, 66, 21, 0.32) 99.98%
  );
  border-radius: 12px;
`;

export const FormWrapper = styled.form`
  width: 60vw;
  height: 55%;
  border-radius: 12px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const ContactTitle = styled.h1`
  text-align: center;
`;

export const EmailInput = styled.input`
  margin-left: 4vw;
  margin-right: 4vw;
  margin-bottom: 2vw;
  width: 80%;
  border-radius: 4px;
  background: #0d4215;
  color: white;

  @media screen and (min-width: 768px) {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 1vw;
  }
`;
export const MessageInput = styled.textarea`
  margin-left: 4vw;
  margin-right: 4vw;
  margin-bottom: 2vw;
  width: 80%;
  height: 50vw;
  border-radius: 4px;
  background: #0d4215;
  color: white;

  @media screen and (min-width: 768px) {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 1vw;
  }
`;
export const SubmitButton = styled.button`
  margin-left: 4vw;
  margin-right: 4vw;
  margin-bottom: 2vw;
  cursor: pointer;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 6vw;
  border-radius: 5px;
  background-color: #0d4215;
  color: white;
  padding: 1.5vw;
  border: none;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 1vw;
    padding: 1.5vw;
  }
`;

export const FormLabel = styled.label`
  color: #0d4215;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 2vw;

  @media screen and (min-width: 768px) {
    margin-bottom: 1vw;
  }
`;
