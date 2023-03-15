import { Card } from "../Card/Card";
import { List } from "./CardList.styled";
import PropTypes from "prop-types";

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

CardList.propTypes = {
  characterList: PropTypes.array,
  deleteCard: PropTypes.func,
  removed: PropTypes.bool,
};
