import styled, { keyframes, css } from 'styled-components';



// Landing page
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInCenter = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideAnimationStyles = css`
  animation: ${slideInCenter} 1s ease;

  @media (min-width: 768px) {
    animation: ${slideInCenter} 1s ease;
  }
`;



export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 2em;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(50%)')};
  transition: opacity 1s ease, transform 1s ease;

  @media screen and (max-width:768px){
     transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(10%)')};
    transition: opacity 1s ease, transform 1s ease;

  }

  @media (min-height: 600px) {
    min-height: 100vh;
  }

  h2 {
    color: var(--main);
  }

  p {
    color: #333;
  }
`;



export const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

export const Header = styled.header`
   padding: 20px;
  width: 100%;
  min-height: 90vh;
  color: #fff;
  background-color: var(--main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding:50px;
  }
`;

export const H1 = styled.h1`
  color: white;
  font-size: 5.5vw;
  margin-bottom: 30px;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 32%;
    transform: translateX(-50%);
    width: 200px;
    height: 10px; 
    background-color: #ffa500; 
    border-radius: 50%;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3); 
  }

  @media (min-width: 768px) {
    font-size: 60px;

    &::after {
      width: 500px;
      height: 20px;
      left: 50%;
      border-radius: 50%;
    }
  }
`;



export const Description2 = styled.p`
  color: white;
  font-size: 3vw;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`;

export const BannerSectionTextContainer = styled.div`
  padding: 10px;
  width: 100%;
  order:2;

  @media (min-width: 768px) {
    width: 50vw;
    order:1;
  }
`;

export const BannerSectionImageContainer = styled.div`
  width: 100%;
  text-align: center;
  order:1;
  padding:20px;

  @media (min-width: 768px) {
    width: 50vw;
    order:2;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background-color: #ffa500;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 2vw;
  cursor:pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7f00;
  }
`;

export const ServiceCardContainer = styled.div`
  padding:20px ;
  display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2em;
  @media screen and (max-width:768px){
    padding:0px;
  }
`;

export const ServiceCard = styled.div`
  flex: 1 1 300px;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 8px var(--border);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column; 
  justify-content:flex-start;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px var(--border);
  }

  h3 {
    color: var(--main);
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    color: #555;
    font-size: 1.2em;
    line-height: 1.6;
    flex: 1;
  }
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 1.2em;
    margin-bottom: 8px;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--main);
  color: #fff;
  padding: 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--main);
  }
`;



// Auth Styles 
export const AuthContainer = styled.div`
    padding-top: 12vh;
    padding-bottom:4vh;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    overflow:auto;
    background-image: linear-gradient(to bottom,var(--background-white), var(--main-background-shade));
`

export const AuthFormContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:200px;
    width:100%;
    @media screen and (max-width:1100px){
        gap:50px;
    }
    @media screen and (max-width:1000px){
        gap:10px;
    }
`

export const AuthForm = styled.form`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
`

export const AuthCard = styled.div`
    width: 440px;
    opacity: 0.9;
    padding: 30px;
    border-radius: .2rem;
    box-shadow:0 0 4px var(--border);
    @media screen and (max-width:768px){
        box-shadow:none;
        padding:20px;
        width:100%;
    }
`

export const Heading = styled.h1`
    color: var(--headings);
    font-weight: bolder;
    font-size: 26px;
    margin: 0;
    font-family:Arial, Helvetica, sans-serif;
    @media screen and (max-width:768px){
        font-size:20px;
    }
`

export const Label = styled.label`
    color:var(--label);
`

export const Error = styled.p`
    color:red;
    font-size:16px;
    margin-bottom:0px;
    padding:0;

    @media screen and (max-width:768px){
        font-size:14px;
    }
`
export const AuthDescription = styled.p`
    color: var(--label);
    font-size: 16px;
    margin-top:6px;
`


export const ForgotPasswordRemeberContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:between;
`

export const RememberMeContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

export const AuthButton = styled.button`
  padding: 12px 15px;
  margin-top:20px;
  font-size:20px;
  background-color: var(--button);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover);
  }
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid var(--border);
  background:transparent;
  border-radius: 5px;
`;

export const InputFieldsContainer = styled.div`
    display:flex;
    flex-direction:column;
`