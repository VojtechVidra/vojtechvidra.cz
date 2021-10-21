import { Container } from "components/Container";
import Link from "next/link";
import styled from "styled-components";
import { sx } from "styles";
import useDarkMode from "use-dark-mode";

export const Menu = () => {
  const { toggle } = useDarkMode();
  return (
    <SWrapper>
      <SHeader>
        <SContainer>
          <Link href="/" passHref>
            <SBrandLink>vojtechvidra.cz</SBrandLink>
          </Link>
          <nav>
            <SList>
              {/* <li>
                <Link href="/">
                  <SMenuLink>Home</SMenuLink>
                </Link>
              </li> */}
              <li>
                <SLightbulb onClick={toggle}>💡</SLightbulb>
              </li>
            </SList>
          </nav>
        </SContainer>
      </SHeader>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  height: 60px;
  margin-bottom: ${sx.spacing(5)};
`;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.12s;

  background-color: ${sx.color("neutral.backgroundVerySlightlyTransparent")};
  @supports (backdrop-filter: blur(64px)) {
    background-color: ${sx.color("neutral.backgroundSlightlyTransparent")};
    backdrop-filter: blur(64px);
  }
`;

const SContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const SBrandLink = styled.a`
  padding: ${sx.spacing(2.5)} ${sx.spacing(2)};
  cursor: pointer;
  color: ${sx.color("neutral.text")};
  :hover {
    text-decoration: none;
  }

  ${sx.font("body")}

  margin-left: ${sx.spacing(-2)};
`;

const SList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  margin-right: ${sx.spacing(-2)};
`;

const SMenuLink = styled.a`
  display: block;
  padding: ${sx.spacing(2.5)} ${sx.spacing(2)};
  color: ${sx.color("neutral.text")};
  cursor: pointer;
  ${sx.font("body")}
`;

const SLightbulb = styled(SMenuLink)`
  font-size: 28px;
  line-height: 28px;
  padding: ${sx.spacing(2)} ${sx.spacing(2)};
  :hover {
    text-decoration: none;
  }
`;
