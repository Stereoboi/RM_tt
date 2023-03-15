import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { auth } from "../../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { CardList } from "../../components/CardList/CardList.jsx";
import { MainContainer } from "../Home/HomePage.styled.js";
import { CollectionBanner } from "../../components/CollectionBanner/CollectionBanner.jsx";
import { Triangle } from "react-loader-spinner";
import { LoaderWrapper } from "./CollectionPage.styled.js";

const CollectionPage = () => {
  const [user, loading] = useAuthState(auth);
  const [userCollection, setUserCollection] = useState([]);
  const [removed, setRemoved] = useState(true);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    const userKey = localStorage.getItem("USER_KEY");
    const FireBase = async () => {
      const querySnapshot = await getDocs(collection(db, userKey || user.uid));

      let arr = [];
      querySnapshot.forEach((doc) => {
        const documentReference = doc.ref;
        arr.push({ ...doc.data(), id: documentReference.id });
      });
      setUserCollection(arr);
      arr.length === 0 ? setStatus("rejected") : setStatus("resolved");
    };
    FireBase();
  }, []);

  const deleteCard = async (id) => {
    try {
      const docRef = doc(db, user.uid, `${id}`);
      await deleteDoc(docRef);
      setUserCollection((prevState) =>
        prevState.filter((item) => item.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (status === "pending") {
    return (
      <LoaderWrapper>
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrapper>
      // <LoaderWrapper>
      //   <CircularProgress color="success" />
      // </LoaderWrapper>
    );
  }

  if (status === "resolved") {
    return (
      <MainContainer>
        <CardList
          characterList={userCollection}
          deleteCard={deleteCard}
          removed={removed}
        />
      </MainContainer>
    );
  }
  if (status === "rejected") {
    return (
      <MainContainer>
        <CollectionBanner />
      </MainContainer>
    );
  }

  // return (
  // <MainContainer>
  //   {userCollection.length === 0 ? (
  //     <CollectionBanner />
  //   ) : (
  //     <CardList
  //       characterList={userCollection}
  //       deleteCard={deleteCard}
  //       removed={removed}
  //     />
  //   )}
  // </MainContainer>
  // );
};

export default CollectionPage;
