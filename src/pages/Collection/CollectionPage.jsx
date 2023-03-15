import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { auth } from "../../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { CardList } from "../../components/CardList/CardList.jsx";
import { MainContainer } from "../Home/HomePage.styled.js";
import { CollectionBanner } from "../../components/CollectionBanner/CollectionBanner.jsx";
import { toast } from "react-toastify";

const CollectionPage = () => {
  const [user, loading] = useAuthState(auth);
  const [userCollection, setUserCollection] = useState([]);
  const [removed, setRemoved] = useState(true);
  useEffect(() => {
    const userKey = localStorage.getItem("USER_KEY");
    const FireBase = async () => {
      const querySnapshot = await getDocs(collection(db, userKey || user.uid));

      let arr = [];
      querySnapshot.forEach((doc) => {
        const documentReference = doc.ref;
        arr.push({ ...doc.data(), id: documentReference.id });
      });
      setUserCollection(arr);
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

  return (
    <MainContainer>
      {userCollection.length === 0 ? (
        <CollectionBanner />
      ) : (
        <CardList
          characterList={userCollection}
          deleteCard={deleteCard}
          removed={removed}
        />
      )}
    </MainContainer>
  );
};

export default CollectionPage;
