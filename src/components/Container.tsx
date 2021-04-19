import styled from "styled-components";
import { spacing } from "styles/theme";

const WIDTH = 744;

export const Container = styled.div`
  max-width: ${(p) => WIDTH + 2 * spacing(2)(p)}px;
  width: 100%;
  padding: 0 ${spacing(2)}px;
  margin: auto;
`;
