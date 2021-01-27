import styled from "styled-components";

export const ResumeWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6vw;

  @media screen and (min-width: 786px) {
    margin-top: 4vw;
    align-items: flex-end;
  }
`;

export const DownloadBtn = styled.button`
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
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: 786px) {
    margin-bottom: 2vw;
  }
`;

export const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 35vw;
  border-radius: 12px;
  margin-bottom: 6vw;

  @media screen and (min-width: 786px) {
    height: 15vw;
    margin-bottom: 1vw;
  }
`;

export const FirstLastBoxWrapper = styled.div`
  width: 100%;
  height: 60vw;
  border-radius: 12px;
  margin-bottom: 6vw;

  @media screen and (min-width: 786px) {
    height: 30vw;
  }
`;

export const LastBoxWrapper = styled.div`
  width: 100%;
  height: 60vw;
  border-radius: 12px;
  margin-bottom: 20vw;

  @media screen and (min-width: 786px) {
    height: 30vw;
  }
`;

export const VideoBox = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HoverMaterial = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoBg = styled.video`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 12px;
`;

export const ContentBox = styled.h1`
  color: white;
  z-index: 3;
  position: absolute;
  padding: 0;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: scroll;
`;

export const TextContent = styled.p`
  text-align: left;
  color: white;
  padding: 1vw;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 1vw;
  margin-bottom: 0;

  @media screen and (min-width: 786px) {
    font-size: 1.5vw;
    line-height: 1.7vw;
    margin-top: 2vw;
  }
`;

export const LastTextContent = styled.p`
  text-align: left;
  color: white;
  padding: 1vw;
  margin-left: 3vw;
  margin-right: 3vw;

  @media screen and (min-width: 786px) {
    font-size: 1.5vw;
    line-height: 1.7vw;
    margin-top: 2vw;
  }
`;

export const SkillsUl = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  width: 64vw;
  justify-content: center;
  align-items: center;
  height: 22vw;

  @media screen and (min-width: 786px) {
    width: 80%;
    height: 5vw;
    margin: 0;
  }
`;

export const SkillsLi = styled.li`
  width: 30vw;
  color: white;

  @media screen and (min-width: 786px) {
    width: 12vw;
  }
`;

export const Schools = styled.div`
  width: 73vw;
  height: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 786px) {
    width: 72vw;
    height: 4vw;
  }
`;

export const SchoolBox = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vw;
  padding: 0;

  @media screen and (min-width: 786px) {
    height: 50%;
  }
`;
export const SchoolIcon = styled.img`
  width: 12vw;
  height: auto;
  margin: 0;
  padding: 0;
  margin-bottom: 0.7vw;

  @media screen and (min-width: 786px) {
    width: 7vw;
    height: auto;
    margin-top: 2vw;
  }
`;
export const SchoolName = styled.h2`
  color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const Degree = styled.p`
  color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;

  @media screen and (min-width: 786px) {
    font-size: 1.5vw;
    line-height: 1.7vw;
  }
`;

export const ExperienceWrap = styled.div``;
export const ExpHeader = styled.div``;

export const ExpLocation = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
`;

export const JobTitle = styled.h2`
  color: white;
  margin: 0;
  padding: 0;
`;

export const ExpDetails = styled.ul`
  color: white;
`;

export const ExpItem = styled.li`
  color: white;
`;
