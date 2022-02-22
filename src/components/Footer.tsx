import { Container } from "components/Container";
import styled from "styled-components";
import { sx } from "styles";

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
  margin-top: ${sx.spacing(8)};
`;

const SContainer = styled(Container)`
  border-top: 2px solid ${sx.color("neutral.backgroundSubtle")};
  padding-top: ${sx.spacing(6)};
  padding-bottom: ${sx.spacing(6)};
`;

const SList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SLink = styled.a`
  padding: ${sx.spacing()};
  color: ${sx.color("neutral.textSubtle")};
  display: inline-block;

  ${sx.font("label")}
`;
