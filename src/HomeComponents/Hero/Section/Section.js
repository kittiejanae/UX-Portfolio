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
  WordContent2,
  WordH2,
  WordP,
  WordH2Alt,
  WordPAlt,
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
        { original: require("../../../images/section1.1.png").default },
      ],
    },
    {
      title: "Product Research",
      textContent:
        "I researched various recipe apps and learned that users would value a higher level of customization and are drawn to the features that allow them to store personal/family recipes.",
      slideGallery: [
        { original: require("../../../images/research1.png").default },
        { original: require("../../../images/research2.png").default },
        { original: require("../../../images/research3.svg").default },
        { original: require("../../../images/research4.png").default },
        { original: require("../../../images/research5.png").default },
      ],
    },
    {
      title: "User Research",
      textContent:
        "I conducted an online survey that included inquiries into each participant’s skill level, the decisions they were making as they cooked, their cooking histories and any emotional attachments that they have with food, cooking and/or certain recipes.",
      slideGallery: [
        { original: require("../../../images/ExperienceChart.svg").default },
        { original: require("../../../images/FrequencyChart.svg").default },
        { original: require("../../../images/IngredientsChart.svg").default },
        { original: require("../../../images/CookbookChart.svg").default },
        { original: require("../../../images/SecretsChart.svg").default },
        { original: require("../../../images/FamilySecretChart.svg").default },
      ],
    },
    {
      title: "Key Insights",
      textContent:
        "Many are looking for ways to preserve their family recipes and share their own special recipes easily. Also, giving the ability archive recipe creation attempts and recipe adjustments will prove valuable.",
      slideGallery: [
        { original: require("../../../images/KeyInsightsChart.svg").default },
      ],
    },
    {
      title: "User Persona One: Meg",
      textContent:
        "Meg is a single, 30 year old woman who enjoys creating her own recipes and cooking meals for her family and friends. Meg wants to save all the recipes she’s created over the years and document some of the successful dishes she’s created herself.",
      slideGallery: [{ original: require("../../../images/meg.jpg").default }],
    },
    {
      title: "User Persona Two: Sam",
      textContent:
        "Sam is a married, 32 year old man who enjoys creating traditional, family recipes and trying out recipes from various sources. Sam wants to see at a glance which recipes were a hit in his household.",
      slideGallery: [{ original: require("../../../images/sam.jpg").default }],
    },
    {
      title: "LoFi Wire Frames",
      textContent:
        "The original design was meant to highlight the user's ability to customize and share their recipes. While creating ther wireframes, it was decided that the features missing from the market should be just as important as the general feel of family and customization.",
      slideGallery: [
        {
          original: require("../../../images/heirloomLofi1.png").default,
        },
        {
          original: require("../../../images/heirloomLofi21.png").default,
        },
        {
          original: require("../../../images/heirloomLofi2.png").default,
        },
        {
          original: require("../../../images/heirloomLofi3.png").default,
        },
        {
          original: require("../../../images/heirloomLofi4.png").default,
        },
        {
          original: require("../../../images/heirloomLofi5.png").default,
        },
      ],
    },
    {
      title: "Final Design",
      textContent:
        "The name Heirloom was chosen to invoke the nostalgic feelings of family, home, memories and childhood that food can provide. Good food is passed down from generation to generation and that history is important and precious.",
      slideGallery: [
        {
          original: require("../../../images/heirloomFinal1.png").default,
        },
        {
          original: require("../../../images/heirloomFinal2.png").default,
        },
      ],
    },
  ];

  const projectSlides2 = [
    {
      title: "Problem",
      textContent:
        "A free service that provides an alternative solution to calling 911 during emergency medical situations for those without insurance.",
      slideGallery: [
        { original: require("../../../images/tactHealth1.png").default },
      ],
    },
    {
      title: "Product Research",
      textContent:
        "There are many apps that allow you to contact emergency services with the push of a button but none that give the user free and immediate solutions. Our team thought it would be best to create a design that would bring real, professional, medical help directly to the user. For us, it was crucial that the service be free to use and not require insurance.  ",
      slideGallery: [
        { original: require("../../../images/tactHealth3.png").default },
        { original: require("../../../images/tactHealth4.png").default },
        { original: require("../../../images/tactHealth5.png").default },
        { original: require("../../../images/tactHealth6.png").default },
        { original: require("../../../images/tactHealth7.png").default },
      ],
    },
    {
      title: "First Iterations",
      textContent:
        "The first thing  we decided as a group was that there should be two sides to the app. The Caregiver and the User should have different experiences with the app without compromising on design consistency.",
      slideGallery: [
        { original: require("../../../images/tactHealth8.svg").default },
        { original: require("../../../images/tactHealth9.svg").default },
      ],
    },
    {
      title: "Onboarding",
      textContent:
        "During the onboarding process, the User is only required to enter the minimum amount of information as we would only want them to give their sensistive information directly to the healthcare professional. Meanwhile, The Caregiver is required to include a professional ID to verify their status as a healthcare professional",
      slideGallery: [
        { original: require("../../../images/tactHealth10.svg").default },
        { original: require("../../../images/tactHealth11.svg").default },
      ],
    },
    {
      title: "User Profiles",
      textContent:
        "Our team created these editable profiles with different features on each “side” of the app. The User’s profile  features their basic information: name, address, gender, email address and emergency contact. The Caregiver’s profile features their email address, certified ID badge and availability.",
      slideGallery: [
        { original: require("../../../images/tactHealth12.svg").default },
        { original: require("../../../images/tactHealth13.svg").default },
      ],
    },
    {
      title: "Help Requests",
      textContent:
        "The User is prompted to select the urgency of the situation and their method of communication for a consultation with a trained healthcare professional in their area. This Urgency Scale allows the Caregiver to feel more prepared when entering the situation as their consultation begins.Alternatively, when marked “On-Duty,” the Caregiver receives alerts from people in need  of emergency care within their immediate area. ",
      slideGallery: [
        { original: require("../../../images/tactHealth14.svg").default },
        { original: require("../../../images/tactHealth15.svg").default },
      ],
    },
    {
      title: "Map Menus",
      textContent:
        "Once the User and the Caregiver are connected, they each gain access to a tracking map. The User can track the Caregiver to see live progress of their ETA. While on the Tracking Map Screens, the Caregiver can view patient information, refer them to a provider, call 911 or cancel the request. From these screens on the User’s side, they can call their emergency contact, call 911 or cancel the request. ",
      slideGallery: [
        {
          original: require("../../../images/tactHealth16.svg").default,
        },
        {
          original: require("../../../images/tactHealth17.svg").default,
        },
        {
          original: require("../../../images/tactHealth18.svg").default,
        },
        {
          original: require("../../../images/tactHealth19.svg").default,
        },
        {
          original: require("../../../images/tactHealth20.svg").default,
        },
      ],
    },
    {
      title: "First Aid Kit",
      textContent:
        "As an added feature, I suggested a “First Aid Kit.”In case the User was out of range from immediate helpor just wanted to get some first aid information, they could use this as a resource.",
      slideGallery: [
        {
          original: require("../../../images/tactHealth21.svg").default,
        },
      ],
    },
    {
      title: "Conclusion",
      textContent:
        "Creating this app was interesting from research to prototypying. At first, none of us were sure of how to even approach the problem. What would serve people the best? What would make it feel familiar? We wanted to really focus on making the app ALL about bringing the healthcare providers directly to people without compromising their sensitive information. Our solution was to create a mix of free consultations and a free “Uber”-like EMT service.",
      slideGallery: [
        {
          original: require("../../../images/tactHealth22.png").default,
        },
        {
          original: require("../../../images/tactHealth23.png").default,
        },
        {
          original: require("../../../images/tactHealth24.png").default,
        },
        {
          original: require("../../../images/tactHealth25.png").default,
        },
      ],
    },
  ];

  const projectSlides3 = [
    {
      title: "Overview",
      textContent:
        "All Tones was designed to assist college students/grads, who want to take better care of their skin, on their skincare journey to create the perfect routine.",
      slideGallery: [
        { original: require("../../../images/allTones1.svg").default },
      ],
    },
    {
      title: "User Research",
      textContent:
        "I conducted an online survey that included inquiries into each participant’s skincare routine, goals, product usage history, and overall familiarity with skincare products and practices.",
      slideGallery: [
        { original: require("../../../images/routineChart.svg").default },
        { original: require("../../../images/goalsChart.svg").default },
        { original: require("../../../images/oftenChart.svg").default },
        { original: require("../../../images/productsChart.svg").default },
      ],
    },
    {
      title: "Discovery Interviews",
      textContent:
        "By doing private interviews with those who met my user type, I learned that most people would like to learn more about what their skin likes/dislikes, skincare is generally important to most people as it can directly to relate to their confidence, and the amount of products in the market is overwhelming to most people.",
      slideGallery: [
        { original: require("../../../images/allTones17.svg").default },
        { original: require("../../../images/allTones18.svg").default },
        { original: require("../../../images/allTones19.svg").default },
        { original: require("../../../images/allTones20.svg").default },
        { original: require("../../../images/allTones21.svg").default },
      ],
    },
    {
      title: "User Persona One: Sadie",
      textContent:
        "Sadie's goals are to have consistently clear skin, identify which products are not working and why, have a clear picture of her skin's progress and be able to have more confidence when buying skin care products. She feels that there are too many products on the market and her lack of education makes buying products too risky.",
      slideGallery: [
        { original: require("../../../images/allTones15.jpg").default },
      ],
    },
    {
      title: "User Persona Two: Caitlyn",
      textContent:
        "Caitlyn's goals are to clear her dark marks and acne scars, minimize her product use through her diet and use all natural ingredients on her skin. I's difficult for her because using and trying marketed skin care does not work for her skin, she does not know exact cause of breakouts and her sensitive skin makes it too hard for her to use anything topically.",
      slideGallery: [
        { original: require("../../../images/allTones16.jpg").default },
      ],
    },
    {
      title: "Initial Wireframes",
      textContent:
        "The original design was meant to allow the user's ability to slowly and safely test products in order to build their routine. While creating ther wireframes, it was decided that the nature of the user's experience would be decided during the onboarding process.",
      slideGallery: [
        { original: require("../../../images/allTones2.png").default },
        { original: require("../../../images/allTones3.png").default },
        { original: require("../../../images/allTones4.png").default },
        { original: require("../../../images/allTones5.png").default },
      ],
    },
    {
      title: "User Testing",
      textContent:
        "I was able to conduct several tests using a low fidelity prototype. Testers felt that the main features were a hit! My image driven design was well received and the overall response was that the app’s high level of customization was unique compared to other skincare apps. The Testers asked if price would be a factor in the final design and requested more educational opportunities.",
      slideGallery: [
        {
          original: require("../../../images/allTones7.png").default,
        },
        {
          original: require("../../../images/allTones8.png").default,
        },
        {
          original: require("../../../images/allTones9.png").default,
        },
        {
          original: require("../../../images/allTones10.png").default,
        },
        {
          original: require("../../../images/allTones11.png").default,
        },
        {
          original: require("../../../images/allTones12.png").default,
        },
        {
          original: require("../../../images/allTones14.png").default,
        },
      ],
    },
    {
      title: "What's next?",
      textContent:
        "I am currently in the process of re-iterating the overall design. My goals are to clean up some of the UX writing and misleading icons to make the journey more user-friendly, work on the “Learn” feature a lot more, integrate more educational opportunites, and I would like to add a sample size service so that user won’t need to purchase full sizes for their product testing.",
      slideGallery: [
        {
          original: require("../../../images/allTones22.svg").default,
        },
        {
          original: require("../../../images/allTones23.svg").default,
        },
        {
          original: require("../../../images/allTones24.svg").default,
        },
        {
          original: require("../../../images/allTones25.svg").default,
        },
      ],
    },
  ];

  const projectSlides4 = [
    {
      title: "Project Overview",
      textContent:
        "A project to design a simple task managager. I decided to create Adulted.",
      slideGallery: [
        { original: require("../../../images/adulted1.svg").default },
      ],
    },
    {
      title: "Initial Wireframes",
      textContent:
        "I wanted to focus on the attempting to create the types of features I wanted for the app while maintaining a simple design.",
      slideGallery: [
        { original: require("../../../images/adulted2.png").default },
        { original: require("../../../images/adulted3.png").default },
      ],
    },
    {
      title: "Prototype Design",
      textContent:
        "I used Figma to create the design. I created a mobile and desktop responsive design for the main page.",
      slideGallery: [
        { original: require("../../../images/adulted4.svg").default },
        { original: require("../../../images/adulted5.svg").default },
      ],
    },
    {
      title: "Final Design & Features",
      textContent:
        "As this was my first React project, I did my best to recreate my Figma design and implement the fetaures that I'd chosen: multiple lists, add & delete tasks, and task customization",
      slideGallery: [
        { original: require("../../../images/adulted6.png").default },
      ],
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
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
          >
            {projectSlides2.map((projectSlide, index) => (
              <SwiperSlide>
                <SliderDiv>
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

                  <WordContent2>
                    <WordH2Alt>{projectSlide.title}</WordH2Alt>
                    <WordPAlt>{projectSlide.textContent}</WordPAlt>
                  </WordContent2>
                </SliderDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </ProjectInfoBox>
      </SectionWrapper2>
      <SectionWrapper3>
        <MockUpImageWrapper to="/AllTones" target="_blank">
          <MockupImage src={alltoneslogo} type="image/png" />
          <MockUpDetails>UX/UI Case Study: All Tones</MockUpDetails>
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
            {projectSlides3.map((projectSlide, index) => (
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
      </SectionWrapper3>
      <SectionWrapper4>
        <MockUpImageWrapper to="/Adulted" target="_blank">
          <MockupImage src={adultedlogo} type="image/png" />
          <MockUpDetails>UIE Project: Adulted</MockUpDetails>
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
            {projectSlides4.map((projectSlide, index) => (
              <SwiperSlide>
                <SliderDiv>
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

                  <WordContent2>
                    <WordH2Alt>{projectSlide.title}</WordH2Alt>
                    <WordPAlt>{projectSlide.textContent}</WordPAlt>
                  </WordContent2>
                </SliderDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </ProjectInfoBox>
      </SectionWrapper4>
    </>
  );
};

export default Section;
