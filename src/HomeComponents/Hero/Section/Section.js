import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-image-gallery/styles/css/image-gallery.css";
import {
  SectionWrapper,
  MockupImage,
  MockUpDetails,
  MockUpImageWrapper,
  ProjectInfoBox,
  // SliderDiv,
  // WordContent,
  // WordH2,
  // WordP,
  // ImageContent,
  // SectionImage,
} from "./SectionStyle";
import heirloomMockup from "../../../images/heirloomMockup.png";
// import Slider from "react-slick";

const Section = () => {
  // const researchImages = [
  //   {
  //     original: require("../../../images/research1.png").default,
  //   },
  //   {
  //     original: require("../../../images/research3.svg").default,
  //   },
  //   {
  //     original: require("../../../images/research2.png").default,
  //   },
  //   {
  //     original: require("../../../images/research4.png").default,
  //   },
  //   {
  //     original: require("../../../images/research5.png").default,
  //   },
  // ];

  // const projectSlides = [
  //   {
  //     title: "Problem",
  //     textContent:
  //       "A home chef is looking for a simple and intuitive way to combine, organize, and quickly access all of their recipes; both personally created recipes and favorites sourced from around the web.",
  //     slideImage: `${require("../../../images/section1.1.png").default}`,
  //   },
  //   {
  //     title: "Product Research",
  //     textContent:
  //       "I researched various recipe apps and learned that users would value a higher level of customization and are drawn to the features that allow them to store personal/family recipes.",
  //     slideImage: "",
  //   },
  //   {
  //     title: "User Research",
  //     textContent:
  //       "I conducted an online survey that included inquiries into each participant’s skill level, the decisions they were making as they cooked, their cooking histories and any emotional attachments that they have with food, cooking and/or certain recipes.",
  //     slideImage: "",
  //   },
  //   {
  //     title: "Key Insights",
  //     textContent:
  //       "Many are looking for ways to preserve and share their family recipes and their own special recipes easily. Also, giving the ability archive recipe creation attempts and recipe adjustments will prove valuable.",
  //     slideImage: "",
  //   },
  //   {
  //     title: "User Persona 1: Meg",
  //     textContent:
  //       "Meg is a single, 30 year old woman who enjoys creating her own recipes and cooking meals for her family and friends. Meg wants to save all the recipes she’s created over the years and document some of the successful dishes she’s created herself.",
  //     slideImage: `${require("../../../images/meg.jpg").default}`,
  //   },
  //   {
  //     title: "User Persona 2:Sam",
  //     textContent:
  //       "Sam is a married, 32 year old man who enjoys creating traditional, family recipes and trying out recipes from various sources. Sam wants to see at a glance which recipes were a hit in his household.",
  //     slideImage: `${require("../../../images/sam.jpg").default}`,
  //   },
  //   {
  //     title: "LoFi Wire Frames",
  //     textContent:
  //       "Sam is a married, 32 year old man who enjoys creating traditional, family recipes and trying out recipes from various sources. Sam wants to see at a glance which recipes were a hit in his household.",
  //     slideImage: "",
  //   },
  // ];

  return (
    <>
      <SectionWrapper>
        <MockUpImageWrapper to="/Heirloom" target="_blank">
          <MockupImage src={heirloomMockup} type="image/png" />
        </MockUpImageWrapper>
        <MockUpDetails>UX/UI Case Study: Heirloom</MockUpDetails>
        <ProjectInfoBox>
          {/* <Slider>
            {projectSlides.map((projectSlide, index) => (
              <SliderDiv>
                <WordContent>
                  <WordH2>{projectSlide.title}</WordH2>
                  <WordP>{projectSlide.textContent}</WordP>
                </WordContent>
                <ImageContent>
                  <SectionImage
                    src={projectSlide.slideImage}
                    type="image/png"
                  />
                  <ImageGallery
                    items={projectSlide.slideGallery}
                    autoPlay={true}
                    showThumbnails={false}
                    showNav={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    disableSwipe={true}
                    slideInterval={3500}
                  />
                </ImageContent>
              </SliderDiv>
            ))}
          </Slider> */}
        </ProjectInfoBox>
      </SectionWrapper>
    </>
  );
};

export default Section;
