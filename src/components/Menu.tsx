import { Container } from "components/Container";
import Link from "next/link";
import styled from "styled-components";
import { color, font, spacing } from "styles/theme";

export const Menu = () => {
  return (
    <SWrapper>
      <SHeader>
        <SContainer>
          <Link href="/" passHref>
            <SBrandLink>vojtechvidra.cz</SBrandLink>
          </Link>
          {/* <nav>
            <SList>
              <li>
                <Link href="/">
                  <SMenuLink>Home</SMenuLink>
                </Link>
              </li>
            </SList>
          </nav> */}
        </SContainer>
      </SHeader>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  height: 68px;
  margin-bottom: ${spacing(5)}px;
`;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.98);
  @supports (backdrop-filter: blur(64px)) {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(64px);
  }
`;

const SContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const SBrandLink = styled.a`
  padding: ${spacing(3)}px ${spacing(2)}px;
  cursor: pointer;
  color: ${color("neutrals", "black")};

  ${font("body")}

  margin-left: ${spacing(-2)}px;
`;

// const SList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   display: flex;
// `;

// const SMenuLink = styled.a`
//   display: block;
//   padding: ${spacing(2)}px;
//   cursor: pointer;
// `;
