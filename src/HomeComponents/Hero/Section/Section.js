import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-image-gallery/styles/css/image-gallery.css";
import {
  SectionWrapper,
  SectionWrapper2,
  SectionWrapper3,
  SectionWrapper4,
  MockupImage,
  MockUpDetails,
  MockUpImageWrapper,
  ProjectInfoBox,
  WordContent,
  WordH2,
  WordP,
  ImageContent,
  SliderDiv,
} from "./SectionStyle";
import heirloomMockup from "../../../images/heirloomMockup.png";
import thlogo from "../../../images/thlogo.png";
import alltoneslogo from "../../../images/alltoneslogo.png";
import adultedlogo from "../../../images/adultedlogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import Slider from "react-slick";
import ImageGallery from "react-image-gallery";

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

  const projectSlides = [
    {
      title: "Problem",
      textContent:
        "A home chef is looking for a simple and intuitive way to combine, organize, and quickly access all of their recipes; both personally created recipes and favorites sourced from around the web.",
      slideGallery: [
        `${require("../../../images/section1.1.png").default}`,
        `${require("../../../images/research1.png").default}`,
      ],
    },
    {
      title: "Product Research",
      textContent:
        "I researched various recipe apps and learned that users would value a higher level of customization and are drawn to the features that allow them to store personal/family recipes.",
      slideGallery: [],
    },
    {
      title: "User Research",
      textContent:
        "I conducted an online survey that included inquiries into each participant’s skill level, the decisions they were making as they cooked, their cooking histories and any emotional attachments that they have with food, cooking and/or certain recipes.",
      slideGallery: [],
    },
    {
      title: "Key Insights",
      textContent:
        "Many are looking for ways to preserve and share their family recipes and their own special recipes easily. Also, giving the ability archive recipe creation attempts and recipe adjustments will prove valuable.",
      slideGallery: [],
    },
    {
      title: "User Persona One: Meg",
      textContent:
        "Meg is a single, 30 year old woman who enjoys creating her own recipes and cooking meals for her family and friends. Meg wants to save all the recipes she’s created over the years and document some of the successful dishes she’s created herself.",
      slideGallery: [`${require("../../../images/meg.jpg").default}`],
    },
    {
      title: "User Persona Two: Sam",
      textContent:
        "Sam is a married, 32 year old man who enjoys creating traditional, family recipes and trying out recipes from various sources. Sam wants to see at a glance which recipes were a hit in his household.",
      slideGallery: [`${require("../../../images/sam.jpg").default}`],
    },
    {
      title: "LoFi Wire Frames",
      textContent:
        "Sam is a married, 32 year old man who enjoys creating traditional, family recipes and trying out recipes from various sources. Sam wants to see at a glance which recipes were a hit in his household.",
      slideGallery: [],
    },
  ];

  SwiperCore.use([Navigation, Pagination, A11y]);

  return (
    <>
      <SectionWrapper>
        <MockUpImageWrapper to="/Heirloom" target="_blank">
          <MockupImage src={heirloomMockup} type="image/png" />
          <MockUpDetails>UX/UIE Case Study: Heirloom</MockUpDetails>
        </MockUpImageWrapper>

        <ProjectInfoBox>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
          >
            {projectSlides.map((projectSlide, index) => (
              <SwiperSlide>
                <SliderDiv>
                  <WordContent>
                    <WordH2>{projectSlide.title}</WordH2>
                    <WordP>{projectSlide.textContent}</WordP>
                  </WordContent>
                  <ImageContent>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </ProjectInfoBox>
      </SectionWrapper>
      <SectionWrapper2>
        <MockUpImageWrapper to="/TacticalHealthcare" target="_blank">
          <MockupImage src={thlogo} type="image/png" />
          <MockUpDetails>UX/UI Case Study: Tactical Healthcare</MockUpDetails>
        </MockUpImageWrapper>

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
      </SectionWrapper2>
      <SectionWrapper3>
        <MockUpImageWrapper to="/AllTones" target="_blank">
          <MockupImage src={alltoneslogo} type="image/png" />
          <MockUpDetails>UX/UI Case Study: All Tones</MockUpDetails>
        </MockUpImageWrapper>

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
      </SectionWrapper3>
      <SectionWrapper4>
        <MockUpImageWrapper to="/AllTones" target="_blank">
          <MockupImage src={adultedlogo} type="image/png" />
          <MockUpDetails>UIE Project: Adulted</MockUpDetails>
        </MockUpImageWrapper>

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
      </SectionWrapper4>
    </>
  );
};

export default Section;
