import { useLocation } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsHeartbreak } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

import {
  List,
  CardItem,
  Image,
  Item,
  Name,
  Race,
  CardLink,
  AddBtn,
  RemoveBtn,
} from "./Card.styled";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { auth } from "../../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const Card = ({ id, name, species, image, deleteCard, removed }) => {
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
    if (!user) {
      toast.info("you need to Sign up to click this");
      return;
    }
    toast.success("Character added to your collection");
    setIsAdded(true);
    GoogleAdd(id, name, species, image);
  };

  const removeFromFavorite = async (e) => {
    toast.info("It seems you don't like him anymore");
    const charId = e.currentTarget.id;
    await deleteCard(charId);
  };

  return (
    <CardItem>
      {!isAdded && (
        <AddBtn type="button" id={id} onClick={addToFavorite}>
          <BsHeart />
        </AddBtn>
      )}
      {removed && (
        <RemoveBtn type="button" id={id} onClick={removeFromFavorite}>
          <BsHeartbreak />
        </RemoveBtn>
      )}
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
