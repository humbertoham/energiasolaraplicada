import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: var(--white);
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  position: relative;
  font-family: "Poppins", sans-serif;
  text-align: center;
  animation: slide-top 1s;
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  h1 {
    font-size: var(--fontSuperBig);
    color: var(--black);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 0px 24px 24px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 35px;

  background-color: var(--white);
`;
export const Overlay = styled.div`
  position: absolute;
  bottom: 40px;
  left: 35px;
`;
export const Page = styled.img`
  display: block;
  height: auto;
  width: 100%;
  margin: auto;
  padding: 0px 30px;
`;
export const Tec = styled.a`
  opacity: 60%;
  display: inline-block;
  height: auto;
  background-color: var(--white);
  color: var(--black);
  font-family: "Poppins", sans-serif;
  width: 80px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  margin: 5px;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
  @media screen and (max-width: 720px) {
    font-size: 10px;
    width: 60px;
  }
`;
export const CardHeader = styled.header`
  padding-bottom: 32px;
  width: 100%;
  position: relative;
  display: inline-block;
`;
export const CardHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: relative;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: var(--smallFont);
  text-align: center;
`;

export const CardButton = styled.a`
  display: block;
  width: 300px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: var(--green);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  margin: auto;
  &:hover {
    transform: scale(1.3);
    transition-timing-function: ease-in-out;
    animation-duration: 1s;
    background-color: var(--black);
    color: var(--green);
  }

  @media screen and (max-width: 452px) {
    width: auto;
  }
`;
