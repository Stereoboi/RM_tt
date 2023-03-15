import * as React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

export default function PaginationButtons({ handleClick, page, totalPages }) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, value) => handleClick(value)}
        count={totalPages}
        variant="outlined"
        page={page}
        sx={{
          ".MuiPaginationItem-root.Mui-selected": {
            color: "green",
            border: "1px solid green",
            backgroundColor: "rgba(25, 118, 210, 0.12)",
          },
          ".MuiPagination-ul": {
            justifyContent: "center",
            marginTop: "50px",
          },
        }}
      />
    </Stack>
  );
}

PaginationButtons.propTypes = {
  handleClick: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};
