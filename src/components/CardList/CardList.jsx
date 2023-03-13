import { Card } from "../Card/Card";
import { List } from "./CardList.styled";
export const CardList = ({ characterList }) => {
  return (
    <List>
      {characterList.map(({ id, name, species, image }) => {
        return (
          <Card name={name} species={species} image={image} key={id} id={id} />
        );
      })}
    </List>
  );
};
