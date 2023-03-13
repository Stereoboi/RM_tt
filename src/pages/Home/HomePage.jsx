import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { CardList } from "../../components/CardList/CardList";
import { MainContainer } from "./HomePage.styled";
import { fetchCharacters } from "../../API/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationButtons from "../../components/Pagination/Pagination";
const HomePage = () => {
  const [characterList, setCharacterList] = useState([]);
  const [filteredChar, setFilteredChar] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";
  const pageParam = searchParams.get("page") || 1;

  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchCharacters(pageParam);
        setTotalPages(result.data.info.pages);
        setPage(Number(result.config.params.page));
        const inAlphabeticOrder = result.data.results.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCharacterList([...inAlphabeticOrder]);
      } catch (err) {
        console.log(err);
      }
    };
    getFetch();
  }, [pageParam]);

  useEffect(() => {
    if (query) {
      // setSearchParams({ page: page });
      const searchedCharacter = characterList
        .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));
      setFilteredChar([...searchedCharacter]);
    }
  }, [query, characterList]);

  const handleClickPagination = (page) => {
    setSearchParams({ page: page });
    setPage(page);
  };

  return (
    <MainContainer>
      <Logo />
      <Input currentPage={page} />
      {!query ? (
        <CardList characterList={characterList} />
      ) : (
        <CardList characterList={filteredChar} />
      )}
      <PaginationButtons
        totalPages={totalPages}
        page={page}
        handleClick={handleClickPagination}
      />
    </MainContainer>
  );
};

export default HomePage;
