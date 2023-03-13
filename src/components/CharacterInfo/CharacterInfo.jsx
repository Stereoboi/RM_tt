import {
  Wrapper,
  Image,
  NameText,
  InfoText,
  List,
  Item,
  ItemTypeText,
  ItemDescriptionText,
  InfoWrapper,
} from "./CharacterInfo.styled";
export const CharacterInfo = ({
  name,
  status,
  species,
  type,
  gender,
  image,
  origin,
}) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Image src={image} />
        <NameText>{name}</NameText>
      </InfoWrapper>

      <InfoWrapper>
        <InfoText>Information</InfoText>
        <List>
          <Item>
            <ItemTypeText>Gender</ItemTypeText>
            <ItemDescriptionText>{gender}</ItemDescriptionText>
          </Item>
          <Item>
            <ItemTypeText>Status</ItemTypeText>
            <ItemDescriptionText>{status}</ItemDescriptionText>
          </Item>
          <Item>
            <ItemTypeText>Specie</ItemTypeText>
            <ItemDescriptionText>{species}</ItemDescriptionText>
          </Item>
          <Item>
            <ItemTypeText>Origin</ItemTypeText>
            <ItemDescriptionText>{origin}</ItemDescriptionText>
          </Item>
          <Item>
            <ItemTypeText>Type</ItemTypeText>
            <ItemDescriptionText>
              {type.length === 0 ? "Information are absent " : type}
            </ItemDescriptionText>
          </Item>
        </List>
      </InfoWrapper>
    </Wrapper>
  );
};
