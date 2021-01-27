import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 80vw;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6vw;
  padding: 0;
`;

export const FooterH1 = styled.h1`
  width: 100%;
  height: 10vw;
  margin: 0;
  padding: 0;
`;

export const ReviewsList = styled.ul`
  max-height: 15vw;
  width: 100%;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-top: 0;

  @media screen and (min-width: 786px) {
    height: 25vw;
  }
`;

export const Review = styled.li`
  width: 100%;
  height: 30%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 35%;

  @media screen and (min-width: 786px) {
    height: 100%;
    bottom: 0;
  }
`;

export const ReviewImage = styled.div`
  width: 20%;
  margin: 0;
  padding: 0;
  float: left;
`;

export const PersonImage = styled.img`
  border-radius: 100%;
  width: 12.5vw;
  height: 12.5vw;
  padding: 0;
  margin-left: 2vw;
  -o-object-fit: fill;
  object-fit: fill;
  background: black;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);
`;

export const ReviewText = styled.div`
  width: 75%;
  margin-left: 4vw;
  float: right;
`;

export const PersonTitle = styled.h2`
  text-align: left;
  width: 100%;
  margin: 0;
`;
export const PersonReview = styled.p`
  text-align: left;
  width: 100%;
`;
