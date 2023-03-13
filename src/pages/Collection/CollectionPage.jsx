import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { auth } from "../../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { CardList } from "../../components/CardList/CardList.jsx";
import { MainContainer } from "../Home/HomePage.styled.js";

const CollectionPage = () => {
  const [user, loading] = useAuthState(auth);
  const [userCollection, setUserCollection] = useState([]);
  useEffect(() => {
    const FireBase = async () => {
      const querySnapshot = await getDocs(collection(db, user.uid));

      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      console.log(arr);
      setUserCollection(arr);
      // arr.length === 0 ? setStatus("rejected") : setStatus("resolved");
    };
    FireBase();
  }, [user.uid]);

  return (
    <MainContainer>
      <CardList characterList={userCollection} />
    </MainContainer>
  );
};

export default CollectionPage;
