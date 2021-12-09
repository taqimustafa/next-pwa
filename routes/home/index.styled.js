import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(33.33%);
  img {
    width: 40px;
  }
`;

export const ItemContainer = styled.div`
  padding: 0px;
  margin: 0px;
  text-align: left;
  list-style-type: none;
  padding: 5px;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: 100%;
`;
