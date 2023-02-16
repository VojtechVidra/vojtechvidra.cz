import { ReactNode } from "react";
import styled from "styled-components";
import { sx } from "styles";

interface Props {
  title: ReactNode;
  date: ReactNode;
  text: ReactNode;
  icon: ReactNode;
}

export const TimelineItem = ({ date, icon, text, title }: Props) => {
  return (
    <SWrapper>
      <SIconWrapper>{icon}</SIconWrapper>
      <div>
        <SH2>{title}</SH2>
        <SDate>{date}</SDate>
        <SText>{text}</SText>
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  margin-bottom: ${sx.spacing(3)};
`;

const SIconWrapper = styled.div`
  margin: 2px 0;
  font-size: 24px;
  line-height: 24px;
  margin-right: ${sx.spacing()};
`;

const SH2 = styled.h2`
  color: ${sx.color("neutral.text")};
  ${sx.font("h4")}

  a {
    color: ${sx.color("primary.text")};
    transition: 0.1s;
    :hover {
      color: ${sx.color("primary.textHover")};
    }
  }
`;

const SDate = styled.p`
  color: ${sx.color("neutral.textSubtle")};
  ${sx.font("footnote")}
  margin-bottom :${sx.spacing()};
`;

const SText = styled.p`
  color: ${sx.color("neutral.textSubtle")};
  ${sx.font("body")}

  a {
    color: ${sx.color("primary.text")};
    ${sx.font("label")}
    transition: .1s;
    :hover {
      color: ${sx.color("primary.textHover")};
    }
  }
`;
