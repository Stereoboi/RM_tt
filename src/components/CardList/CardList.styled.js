import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  /* justify-content: center; */
  justify-items: center;

  grid-row-gap: 32px;
  grid-column-gap: 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 20px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 20px;
  }
`;

// .container {
//   max-width: 1024px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//   grid-gap: 24px 20px;
// }

// .card {
//   width: 240px;
//   height: 244px;
// }

// @media screen and (max-width: 768px) {
//   .container {
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     grid-gap: 16px 12px;
//   }

//   .card {
//     width: 200px;
//     height: 204px;
//   }
// }

// @media screen and (max-width: 480px) {
//   .container {
//     grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
//     grid-gap: 12px 8px;
//   }

//   .card {
//     width: 160px;
//     height: 164px;
//   }
// }
