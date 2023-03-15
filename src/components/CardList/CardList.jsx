import { Card } from "../Card/Card";
import { List } from "./CardList.styled";
export const CardList = ({ characterList, deleteCard, removed }) => {
  return (
    <List>
      {characterList.map(({ id, name, species, image }) => {
        return (
          <Card
            name={name}
            species={species}
            image={image}
            key={id}
            id={id}
            deleteCard={deleteCard}
            removed={removed}
          />
        );
      })}
    </List>
  );
};
