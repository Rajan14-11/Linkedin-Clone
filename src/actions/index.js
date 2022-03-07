import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";
import { storage } from "../firebase";
import db from "../firebase";
import { ref, uploadBytes ,getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInApi() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function postArticleApi(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      // console.log(payload)
      const upload = ref(storage, `images/${payload.image}`);
      uploadBytes(upload, payload.image).then(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`progess:${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          // const downloadURL = await upload.snapshot.ref.getDownloadURL();
          const downloadURL = await getDownloadURL(upload)
          await addDoc(collection(db,"articles","article"),{
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          console.log("done")
        }
      );
    }
  };
}
