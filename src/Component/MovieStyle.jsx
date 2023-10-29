import styled from "styled-components";

export const appContainer = styled.div`
  display: grid;
  min-width: 100vh;
  margin: 50px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: (3, 1fr);
`;
export const movieContainer = styled.div`
  position: relative;
  width: 150px;
  height: 400px;
  margin: 3px;
`;
export const moviePicture = styled.img`
  max-width: 100%;
  height: 300px;
`;
export const text = styled.div`
  height: 70px;
  padding: 5px;
  display: flex;
  background-color: rgb(70, 59, 103);
  font-size: 14px;
  color: white;
`;
export const title = styled.p`
  width: 80%;
`;
export const vote_average = styled.p`
  text-align: center;
  width: 20%;
`;
export const modal = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  font-size: 13px;
  overflow: auto;
  height: 385px;
  width: 150px;
  color: white;
  display: none;
  flex-direction: column;
  ${movieContainer}:hover & {
    display: flex;
  }
`;
