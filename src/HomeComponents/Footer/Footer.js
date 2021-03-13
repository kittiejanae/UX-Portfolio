import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import {
  FooterWrapper,
  ReviewsList,
  Review,
  PersonImage,
  PersonTitle,
  PersonReview,
  FooterH1,
  ReviewImage,
  ReviewText,
} from "./FooterStyle";

const reviews = [
  {
    name: "Mia Peace",
    personPhoto: `${require("../../images/mia.jpg").default}`,
    occupation: "UX/UI Facilitator",
    connection: "Teammate",
    quote:
      "Beyond most that I've had the pleasure of working with, Kittie's tenacity and attention to detail puts her among the most talented. Once she starts something, you can be sure that she will finish it with style.",
  },
  {
    name: "Jordan Burke",
    personPhoto: `${require("../../images/jordan.jpg").default}`,
    occupation: "UX Designer",
    connection: "Teammate",
    quote:
      "I’ve had the pleasure to get to know Kittie, the artist. Her natural charisma and flair is evident in every single piece of work that she’s shared with me. I’m continuously blown away by how she always connects with her audience in unexpectedly delightful ways through her design choices.",
  },
  {
    name: "Jake Johnson",
    personPhoto: `${require("../../images/jake.png").default}`,
    occupation: "UIE Instructor",
    connection: "Teacher",
    quote:
      "Kittie was one of the strongest students I've had the pleasure of teaching. She rose to every challenge put before her, and refused to settle for anything less than excellence. In addition to her eye for design and knack for programming, her interpersonal skills and work ethic made her a valuable asset to every team she was a part of.",
  },
  {
    name: "Matthew Conroy",
    personPhoto: `${require("../../images/matt.jpeg").default}`,
    occupation: "UX/UI Tutor",
    connection: "Tutor",
    quote:
      "Kittie is a hard-working and talented developer.  When seeking assistance from a coach, she was easily able to articulate where any problems in her code were coming from and also understood how to implement any suggested changes.",
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterH1>My Friends Call Me "Kittie"...</FooterH1>
      <ReviewsList>
        <Slider autoplay={100} duration={10000} previousButton="" nextButton="">
          {reviews.map((review, index) => (
            <Review>
              <ReviewImage>
                <PersonImage src={review.personPhoto} alt={review.name} />
              </ReviewImage>
              <ReviewText>
                <PersonTitle>
                  {review.name} • {review.occupation} • {review.connection}
                </PersonTitle>
                <PersonReview>“{review.quote}”</PersonReview>
              </ReviewText>
            </Review>
          ))}
        </Slider>
      </ReviewsList>
    </FooterWrapper>
  );
};

export default React.memo(Footer);
