import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";
import { storage } from "../firebase";
import db from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
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
    dispatch(setLoading(true));

    if (payload.image !== "") {
      console.log(payload);
      const storageRef = ref(storage, `images/${payload.image.name}`);

      const metadata = {
        contentType: "image/jpeg , image/png, image/gif",
      };

      const uploadTask = uploadBytesResumable(
        storageRef,
        payload.image,
        metadata
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}%`);
          if (snapshot.state === "running") {
            console.log(`progess:${progress}%`);
          }
        },

        (error) => console.log(error.code),

        async () => {
          const downloadURL = await getDownloadURL(storageRef);
          const collectionRef = collection(db, "articles");

          await addDoc(collectionRef, {
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
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      const collectionRef = collection(db, "articles");

      addDoc(collectionRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticleApi() {
  return (dispatch) => {
    let payload;
    const q = query(collection(db, "articles"), orderBy("actor.date", "desc"));
    getDocs(q).then((snapshot) => {
      payload = snapshot.docs.map((doc) =>doc.data());
      // console.log(payload)
      dispatch(getArticles(payload))
    });
  };
}
