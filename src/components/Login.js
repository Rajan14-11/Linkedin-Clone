import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    
      <Container>
        <Nav>
          <a href="/">
            <img src="/images/login-logo.svg" />
          </a>
          <div>
            <Join>Join Now</Join>
            <SignIn>Signin</SignIn>
          </div>
        </Nav>
        <Section>
          <Hero>
            <h1>Welcome to your professional community</h1>
            <img src="/images/login-hero.svg" />
          </Hero>
          <Form>
            <Google>
              <img src="/images/google.svg" alt="" />
              Sign in with Google
            </Google>
          </Form>
        </Section>
      </Container>
  );
}

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.div`
  max-height: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
    @media (max-width: 360px) {
      padding: 0 5px;
      width: 130px;
    }
    & > div {
      @media (max-width: 360px) {
          display: flex;
    justify-content:space-between;
    align-items: stretch;
      }
    }
  }
  @media (max-width: 360px) {
      display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;
const Join = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  text-decoration: none;
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  text-decoration: none;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
  @media (max-width: 360px) {
    padding:5px
  }
`;

const Section = styled.div`
display: flex;
align-content: flex-start;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;

@media (max-width:768px) {
    min-height: 0px;
    margin: auto;
    
}
`;
const Hero = styled.div`
  width: 100%;

  h1 {
    width: 55%;
    font-weight: 200;
    font-size: 56px;
    color: #2977c9;
    line-height: 70px;

    @media (max-width: 768px){
        text-align: center;
        width:100%;
        font-size: 25px;
        line-height: 2;
    }

  }

  img{
      width:700px;
      height:670px;
      position: absolute;
      bottom:-2px;
      right: -150px;

      @media (max-width:768px) {
top:273px;
          width:initial;
          height: initial;
          position: initial;
      }
  }
`;

const Form = styled.div`

margin-top: 100px;
width:408px;
@media (max-width:768px) {
    margin-top: 20px;
    
    width:100vw;
}
`

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
export default Login;
