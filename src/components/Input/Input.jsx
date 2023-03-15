import { InputField, Form, Button, InputWrapper } from "./Input.styled";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";

export const Input = ({ currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedCharacter = searchParams.get("query") ?? "";
  const page = searchParams.get("page") ?? "";

  const updateQueryString = (query) => {
    const nextParams = query.trim() !== "" ? { query, page } : {};

    setSearchParams(nextParams);
  };

  return (
    <Form>
      <InputWrapper>
        <InputField
          name="query"
          type="text"
          placeholder="Filter by name..."
          value={searchedCharacter}
          onChange={(e) => updateQueryString(e.target.value)}
        />
        <Button type="button">
          <BiSearch />
        </Button>
      </InputWrapper>
    </Form>
  );
};

Input.propTypes = {
  currentPage: PropTypes.number,
};
