import React from 'react'
import styled from 'styled-components'

function Leftside() {
    return (
      <Container>
        <ArtCard>
          <UserInfo>
            <CardBackground />
            <a>
              <Photo />
              <Link>Welcome,There!</Link>
            </a>
            <a>
              <AddPhotoText>Add a photo</AddPhotoText>
            </a>
          </UserInfo>
          <Widget>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your network</span>
              </div>
              <img src="/images/widget-icon.svg" alt="" />
            </a>
          </Widget>
            <Item>
              <span>
                <img src='/images/item-icon.svg'/>
                My Items
              </span>
            </Item>
        </ArtCard>
        <CommunityCard>
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>Events
              <img src='/images/plus-icon.svg'/>
            </span>
          </a>
          <a>
            <span>Follow Hashtags</span>
          </a>
          <a>
            <span>Discover more</span>
          </a>
        </CommunityCard>
      </Container>
    );
}

const Container =styled.div`
grid-area: leftside;
`
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground =styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 54px;
margin:-12px -12px 0;
`
const Photo = styled.div`
  cursor: pointer;
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  border: 2px solid white;
  margin: -38px auto 12px;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  cursor: pointer;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  a {
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: start;
    cursor:pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 12px;
 
  span {
    display: flex;
    align-items: center;
    cursor:pointer;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  padding: 8px 0 0;

  a {
    padding: 4px 12px;
    cursor:pointer;
    &:hover {

      color: #0a66c2;
    }

    span {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.33;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;


export default Leftside
