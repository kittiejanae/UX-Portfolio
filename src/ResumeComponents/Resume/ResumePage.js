import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  BoxWrapper,
  VideoBox,
  VideoBg,
  ContentBox,
  ResumeWrapper,
  HoverMaterial,
  LastBoxWrapper,
  DownloadBtn,
  TextBox,
  LastTextBox,
  TextContent,
  SkillsUl,
  SkillsLi,
  SchoolBox,
  SchoolIcon,
  SchoolName,
  Degree,
  Schools,
  ExperienceWrap,
  ExpHeader,
  ExpLocation,
  JobTitle,
  ExpDetails,
  ExpItem,
  FirstLastBoxWrapper,
  LastTextContent,
} from "./ResumeElements";
import resumevid1 from "../../videos/resumevid1.mp4";
import resumevid2 from "../../videos/resumevid2.mp4";
import resumevid3 from "../../videos/resumevid3.mp4";
import resumevid4 from "../../videos/resumevid4.mp4";
import kenzie from "../../images/kenzie.png";
import aia from "../../images/aia.png";
import agnes from "../../images/agnes.svg";

const ResumePage = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false, false]);

  const handleFlip = (flipIndex) => {
    console.log(flipIndex);
    setIsFlipped((prevIsFlipped) =>
      prevIsFlipped.map((flipped, i) => (i === flipIndex ? !flipped : flipped))
    );
  };
  return (
    <ResumeWrapper>
      <DownloadBtn>Download My Resume</DownloadBtn>
      <ReactCardFlip
        isFlipped={isFlipped[0]}
        flipDirection="vertical"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <BoxWrapper onClick={() => handleFlip(0)}>
          <VideoBox>
            <HoverMaterial>
              <ContentBox>About Me</ContentBox>
              <VideoBg autoPlay loop muted src={resumevid1} type="video/mp4" />
            </HoverMaterial>
          </VideoBox>
        </BoxWrapper>
        <BoxWrapper onClick={() => handleFlip(0)}>
          <TextBox>
            <TextContent>
              I am a lifelong creative learner with a passion for creating
              useful designs. Recently graduated from Kenzie Academy with a
              certificate in UX Design with more than 5 years experience in the
              entertainment industry in various forms. I am interested in
              wireframing, prototyping and working with a team to create
              innovative products. I create designs to improve oversatflipIrated
              markets and overall user experience.
            </TextContent>
          </TextBox>
        </BoxWrapper>
      </ReactCardFlip>
      <ReactCardFlip
        isFlipped={isFlipped[1]}
        flipDirection="vertical"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
        id={2}
      >
        <BoxWrapper onClick={() => handleFlip(1)}>
          <VideoBox>
            <HoverMaterial>
              <ContentBox>Skills</ContentBox>
              <VideoBg autoPlay loop muted src={resumevid2} type="video/mp4" />
            </HoverMaterial>
          </VideoBox>
        </BoxWrapper>
        <BoxWrapper onClick={() => handleFlip(1)}>
          <TextBox>
            <TextContent>
              <SkillsUl>
                <SkillsLi>HTML/CSS</SkillsLi>
                <SkillsLi>SCSS</SkillsLi>
                <SkillsLi>Sass</SkillsLi>
                <SkillsLi>JavaScript</SkillsLi>
                <SkillsLi>React</SkillsLi>
                <SkillsLi>Wireframes</SkillsLi>
                <SkillsLi>Prototyping</SkillsLi>
                <SkillsLi>Figma</SkillsLi>
                <SkillsLi>Whimsical</SkillsLi>
                <SkillsLi>Sketch</SkillsLi>
                <SkillsLi>InVision</SkillsLi>
                <SkillsLi>Photoshop</SkillsLi>
                <SkillsLi>UX Writing</SkillsLi>
                <SkillsLi>Logic</SkillsLi>
                <SkillsLi>ProTools</SkillsLi>
                <SkillsLi>Adobe Suite</SkillsLi>
              </SkillsUl>
            </TextContent>
          </TextBox>
        </BoxWrapper>
      </ReactCardFlip>
      <ReactCardFlip
        isFlipped={isFlipped[2]}
        flipDirection="vertical"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
        id={3}
      >
        <BoxWrapper onClick={() => handleFlip(2)}>
          <VideoBox>
            <HoverMaterial>
              <ContentBox>Education</ContentBox>
              <VideoBg autoPlay loop muted src={resumevid3} type="video/mp4" />
            </HoverMaterial>
          </VideoBox>
        </BoxWrapper>
        <BoxWrapper onClick={() => handleFlip(2)}>
          <TextBox>
            <TextContent>
              <Schools>
                <SchoolBox>
                  <SchoolIcon src={kenzie} type="image/png" />
                  <SchoolName>Kenzie Academy</SchoolName>
                  <Degree>
                    Front-End Software Engineering <br></br>
                    UX/UI Design
                  </Degree>
                </SchoolBox>
                <SchoolBox>
                  <SchoolIcon src={aia} type="image/png" />
                  <SchoolName>Art Institute of Atlanta</SchoolName>
                  <Degree>Media and Audio</Degree>
                </SchoolBox>
                <SchoolBox>
                  <SchoolIcon src={agnes} type="image/svg" />
                  <SchoolName>Agnes Scott College</SchoolName>
                  <Degree>Performing Arts Management</Degree>
                </SchoolBox>
              </Schools>
            </TextContent>
          </TextBox>
        </BoxWrapper>
      </ReactCardFlip>
      <ReactCardFlip
        isFlipped={isFlipped[3]}
        flipDirection="vertical"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <FirstLastBoxWrapper onClick={() => handleFlip(3)}>
          <VideoBox>
            <HoverMaterial>
              <ContentBox>Experience</ContentBox>
              <VideoBg autoPlay loop muted src={resumevid4} type="video/mp4" />
            </HoverMaterial>
          </VideoBox>
        </FirstLastBoxWrapper>
        <LastBoxWrapper onClick={() => handleFlip(3)}>
          <LastTextBox>
            <LastTextContent>
              <ExperienceWrap>
                <ExpHeader>
                  <ExpLocation>Kenzie Academy</ExpLocation>
                  <JobTitle>Project Based Training</JobTitle>
                </ExpHeader>
                <ExpDetails>
                  <ExpItem>
                    Studied and utilized UX Design software like Figma,
                    Whimsical, Sketch, Photoshop, InVision, etc.
                  </ExpItem>
                  <ExpItem>
                    Successfully built websites and apps with coding languages
                    such as HTML/CSS, SCSS, Sass, JavaScript and React
                  </ExpItem>
                  <ExpItem>
                    Successfully built websites and apps with coding languages
                    such as HTML/CSS, SCSS, Sass, JavaScript and React
                  </ExpItem>
                  <ExpItem>
                    Experience drawing from a variety of research methods at
                    different stages of the design process to encourage early
                    design work, inform the initial opportunity, collect
                    formative feedback to support iteration, and validate a
                    launch solution.
                  </ExpItem>
                  <ExpItem>
                    Worked on diverse teams to collaborate on projects completed
                    within tight deadlines
                  </ExpItem>
                </ExpDetails>
              </ExperienceWrap>
              <ExperienceWrap>
                <ExpHeader>
                  <ExpLocation>Wrrk</ExpLocation>
                  <JobTitle>Customer Service Rep</JobTitle>
                </ExpHeader>
                <ExpDetails>
                  <ExpItem>
                    Communicate with internal teammates, clients, and account
                    managers about services and trends
                  </ExpItem>
                  <ExpItem>
                    Resolve customer inquiries and exceed service delivery
                    standards, completing tickets at 125% of daily target
                  </ExpItem>
                  <ExpItem>
                    Utilize CRM and eCommerce software including Zendesk,
                    Shopify, Freshdesk, StitchLabs, Recurly
                  </ExpItem>
                  <ExpItem>
                    Support management by leading training sessions and creating
                    training materials
                  </ExpItem>
                  <ExpItem>
                    Successfully working in a fast-paced remote environment
                    using platforms such as Slack, Zoom, Skype, GoogleDocs,
                    GoogleSheets, etc to communicate with cross-functional teams
                  </ExpItem>
                  <ExpItem>
                    Provide social media services to our clients
                  </ExpItem>
                </ExpDetails>
              </ExperienceWrap>
              <ExperienceWrap>
                <ExpHeader>
                  <ExpLocation>Kids TV INTL</ExpLocation>
                  <JobTitle>Camp Director</JobTitle>
                </ExpHeader>
                <ExpDetails>
                  <ExpItem>
                    Direct and teach film essentials to children ages 7-14
                  </ExpItem>
                  <ExpItem>
                    Lead lessons on Scriptwriting, Storyboarding, Video Editing,
                    On-Set Etiquette, Sound Design, Boom Operation Skills, Set
                    Design and Post-Production
                  </ExpItem>
                  <ExpItem>
                    Utilize video and audio editing software (Final Cut, Logic,
                    ProTools, Adobe Premiere and more)
                  </ExpItem>
                  <ExpItem>
                    Consistently deliver high-volumes of content with extremely
                    tight deadlines
                  </ExpItem>
                </ExpDetails>
              </ExperienceWrap>
              <ExperienceWrap>
                <ExpHeader>
                  <ExpLocation>Stone Mountain Park</ExpLocation>
                  <JobTitle>Photo Merchandise Assistant Lead/Trainer</JobTitle>
                </ExpHeader>
                <ExpDetails>
                  <ExpItem>
                    Supervised and delegated assignments to groups of 4-12
                    employees
                  </ExpItem>
                  <ExpItem>
                    Delivered high quality images to guests, accurately setting
                    camera settings prior to shooting photos
                  </ExpItem>
                  <ExpItem>Rebuilt the training method and manual</ExpItem>
                  <ExpItem>
                    Led team training sessions, including new team member
                    training
                  </ExpItem>
                  <ExpItem>
                    Coordinated and conducted morning/safety meetings as
                    required
                  </ExpItem>
                </ExpDetails>
              </ExperienceWrap>
              <ExperienceWrap>
                <ExpHeader>
                  <ExpLocation>AIB TV</ExpLocation>
                  <JobTitle>TV Host</JobTitle>
                </ExpHeader>
                <ExpDetails>
                  <ExpItem>
                    Led and performed on-camera as a broadcast journalist
                  </ExpItem>
                  <ExpItem>
                    Brought light to community leaders and issues
                  </ExpItem>
                  <ExpItem>
                    Developed strong communication and storytelling skills
                  </ExpItem>
                  <ExpItem>Gained experience as an influencer</ExpItem>
                  <ExpItem>
                    Public speaking experience and ability to manage priorities
                    in a high-productivity environment with tight deadlines{" "}
                  </ExpItem>
                  <ExpItem>
                    Experience writing scripts and thought-provoking interview
                    questions
                  </ExpItem>
                </ExpDetails>
              </ExperienceWrap>
            </LastTextContent>
          </LastTextBox>
        </LastBoxWrapper>
      </ReactCardFlip>
    </ResumeWrapper>
  );
};

export default ResumePage;
