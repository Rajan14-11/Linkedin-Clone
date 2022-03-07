import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {connect} from "react-redux"
import { Firestore } from "firebase/firestore";
import { postArticleApi } from "../actions";
function Postmodal(props) {
  const [EditorText, setEditorText] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const reset = (event) => {
    setEditorText("");
    setImageFile("");
    setVideoFile("");
    setAssetArea("");
    props.clickHandler(event);
  };

  function handleImage(event) {
    let image = event.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Not an image.This file is: ${typeof imageFile}`);
      return;
    } else {
      setImageFile(URL.createObjectURL(image));
    }
  }

  const switchAssetArea = (area) => {
    setImageFile("");
    setVideoFile("");
    setAssetArea(area);
  };

  const postArticle = (e)=>{
      e.preventDefault()
      if(e.target !== e.currentTarget){
          console.log("hello")
          return;
      }

      const payload={
          image:imageFile,
          video:videoFile,
          user:props.user,
          description:EditorText,
        //   timestamp:Firestore.timestamp.now()
      }

      props.postArticle(payload);
      reset(e);
  }

  return (
    <>
      {props.showModal == "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button
                onClick={(e) => {
                  reset(e);
                }}
              >
                <img src="/images/close-icon.svg" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                  {props.user.photoURL ?
                <img src={props.user.photoURL}/>:
                <img src="/images/user.svg"/>
                  }
                  {props.user.displayName ? <span>{props.user.displayName}</span>
                  :
                <span>name</span>}

              </UserInfo>
              <Editor>
                <textarea
                  value={EditorText}
                  onChange={(event) => setEditorText(event.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />

                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      onChange={handleImage}
                      accept="image/gif, image/jpg, image/png"
                      name="image"
                      id="imageFile"
                      style={{ display: "none" }}
                    ></input>
                    <p>
                      <label htmlFor="imageFile">
                        Select an image to share
                      </label>
                    </p>
                    {imageFile && <img src={imageFile} alt="" />}
                  </UploadImage>
                ) : (
                    assetArea==="media" &&
                  <>
                    <input
                      type="text"
                      placeholder="Please input a Video link"
                      value={videoFile}
                      onChange={(e) => setVideoFile(e.target.value)}
                    />
                    {videoFile && (
                      <ReactPlayer width={"100%"} url={videoFile} />
                    )}
                  </>
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAsset>
                <AssetButton onClick={()=>{switchAssetArea("image")}}>
                  <img src="/images/share-image.svg" />
                </AssetButton>
                <AssetButton onClick={()=>{switchAssetArea("media")}}>
                  <img src="/images/share-video.svg" />
                </AssetButton>
              </AttachAsset>
              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" alt="" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!EditorText ? true : false}
              onClick={(event)=>postArticle(event)} >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  background: #fff;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 400;
  }
  button {
    width: 40px;
    height: 40px;
    min-width: auto;
    border: none;
    cursor: pointer;
    outline: none;
    background: transparent;
    img,
    svg {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 5px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 24px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-clip: content-box;
    border: 2px solid transparent;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px 10px 16px;
`;

const AttachAsset = styled.div`
  display: flex;
  align-items: center;
`;

const AssetButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 5px;
  border-radius: 4px;
  min-width: auto;
  margin-right: 8px;
  background: rgba(0, 0, 0, 0.08);
  justify-content: center;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  ${AssetButton} {
    border-radius: 50px;
    padding: 5px 10px;
    span {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      padding: 0 5px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  padding: 0 16px;
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "#fff")};
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps= (state)=>{
 return {
    user: state.userState.user,
 }
}

const mapDispatchToProps = (dispatch)=>({

    postArticle : (payload) => dispatch(postArticleApi(payload)),
})


export default connect(mapStateToProps , mapDispatchToProps)(Postmodal);
