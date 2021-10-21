import styled from "styled-components";
import { sx } from "styles";

const WIDTH = 744;

export const Container = styled.div`
  max-width: calc(${WIDTH}px + ${sx.spacing(4)});
  width: 100%;
  padding: 0 ${sx.spacing(2)};
  margin: auto;
`;
