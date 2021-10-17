import { Container } from "components/Container";
import styled from "styled-components";
import { color, font, spacing } from "styles/theme";

export const Footer = () => {
  return (
    <SFooter>
      <SContainer>
        <SList>
          <li>
            <SLink href="https://github.com/VojtechVidra">GitHub</SLink>
          </li>
          <li>
            <SLink href="https://www.linkedin.com/in/vojt%C4%9Bch-vidra-4b474a10b">
              LinkedIn
            </SLink>
          </li>
        </SList>
      </SContainer>
    </SFooter>
  );
};

const SFooter = styled.footer`
  margin-top: ${spacing(8)}px;
`;

const SContainer = styled(Container)`
  border-top: 2px solid #e9e9e9;
  padding-top: ${spacing(2)}px;
  padding-bottom: ${spacing(4)}px;
`;

const SList = styled.ul`
  list-style-type: none;
`;

const SLink = styled.a`
  padding: ${spacing()}px;
  color: ${color("neutrals.grey")};
  display: inline-block;

  ${font("label")}
`;
