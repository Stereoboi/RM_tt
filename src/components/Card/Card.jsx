import { useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import {
  List,
  CardItem,
  Image,
  Item,
  Name,
  Race,
  CardLink,
  AddBtn,
} from "./Card.styled";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { auth } from "../../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const Card = ({ id, name, species, image }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdded, setIsAdded] = useState(false);
  const location = useLocation();

  const GoogleAdd = (id, name, species, image) => {
    const CharacterRef = collection(db, user.uid);
    setDoc(doc(CharacterRef, `${id}`), {
      id: id,
      name: name,
      species: species,
      image: image,
    });
  };

  const addToFavorite = () => {
    setIsAdded(true);
    console.log();
    GoogleAdd(id, name, species, image);
  };

  return (
    <CardItem>
      <AddBtn type="button" id={id} isAdded={isAdded} onClick={addToFavorite}>
        <FiHeart />
      </AddBtn>
      <CardLink to={`/character/${id}`} state={{ from: location }}>
        <Image src={image} />
        <List>
          <Item>
            <Name>{name}</Name>
          </Item>
          <Item>
            <Race>{species}</Race>
          </Item>
        </List>
      </CardLink>
    </CardItem>
  );
};
