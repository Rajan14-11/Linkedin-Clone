import React, { useState } from 'react'
import styled from 'styled-components'
import Postmodal from './Postmodal';
function Main(props) {

  const [showModal , setShowModal] = useState("close")

  const clickHandler = (event)=>{
    event.preventDefault();
    if(event.target !== event.currentTarget){
        return;
    }
    switch(showModal){
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
      break;
      default:
        setShowModal("close");
        break;
    }
  }
    return (
      <Container>
        <ShareBox>
          <div>
            <img src="images/user.svg" />
            <button onClick={clickHandler}>Start a post</button>
          </div>
          <div>
            <button>
              <img src="/images/photo-icon.svg" alt="" />
              <span>Photo</span>
            </button>
            <button>
              <img src="/images/video-icon.svg" alt="" />
              <span>Video</span>
            </button>
            <button>
              <img src="/images/event-icon.svg" alt="" />
              <span>Event</span>
            </button>
            <button>
              <img src="/images/article-icon.svg" alt="" />
              <span>Write article</span>
            </button>
          </div>
        </ShareBox>
        <Article>
          <SharedActor>
            <a>
              <img src="images/user.svg" />
              <div>
                <span>title</span>
                <span>description</span>
                <span>date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipses.svg" alt="" />
            </button>
          </SharedActor>
          <Description>description</Description>
          <SharedImg>
            <img src="images/shared-image.jpg" />
          </SharedImg>
          <SocialCount>
            <>
              <li>
                <button>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                    alt=""
                  />
                  <span>2</span>
                </button>
              </li>
              <li>
                <a>3 Comments</a>
              </li>
            </>
          </SocialCount>
          <SocialActions>
            <button
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="rgba(0, 0, 0, 0.6)"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg>
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
        <Postmodal showModal={showModal} clickHandler={clickHandler}/>
      </Container>
    );
}

const Container = styled.div`
grid-area: main;
`
const CommonBox = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        padding-bottom: 4px;
        button{
            img{
                margin:0 4px 0 -2px;
            }
        }
    }
  }
`;
const Article = styled(CommonBox)`
padding:0;
margin:0 0 8px;
overflow:visible;
`
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }
        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    top: 0;
    right: 12px;
    border: none;
    outline: none;
    background: transparent;
  }
`;
const Description = styled.div`
padding:0 16px;
overflow:hidden;
font-size:14px;
text-align:left;
`

const SharedImg = styled.div`
margin-top:8px;
  background-color: #f9fafb;
  img{
    width: 100%;
    height:100%;
  }
`;
const SocialCount = styled.ul`
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9efdf;
  color: rgba(0, 0, 0, 0.6);
  list-style: none;
  line-height: 1.3;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      background: transparent;
      span {
        padding-left: 5px;
      }
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 4px 12px;
  min-height: 40px;
  padding-bottom: 5px;

  button {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    padding: 8px;
    border: none;
    background: transparent;

    span {
      margin-left: 4px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
  }
  button.active {
    span {
      color: #0a66c2;
      font-weight: 600;
    }
    svg {
      fill: #0a66c2;
    }
  }
`;
export default Main
