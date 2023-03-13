import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { CharacterInfo } from "../../components/CharacterInfo/CharacterInfo";
import { fetchCharacterById } from "../../API/api";
import { BackLinkItem, LinkText } from "./infoPage.styled";
import { BiArrowBack } from "react-icons/bi";

const InfoPage = () => {
  const [characterInfo, setCharacterInfo] = useState(null);
  const { characterId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchCharacterById(characterId);
        // console.log(result.data);
        setCharacterInfo(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFetch();
  }, [characterId]);

  if (characterInfo) {
    const { name, status, species, type, gender, image, origin } =
      characterInfo;
    return (
      <>
        <BackLinkItem to={backLinkHref} type="button">
          <BiArrowBack />
          <LinkText>Go Back</LinkText>
        </BackLinkItem>
        <CharacterInfo
          name={name}
          status={status}
          species={species}
          type={type}
          gender={gender}
          image={image}
          origin={origin.name}
        />
      </>
    );
  }

  return;
};

export default InfoPage;
