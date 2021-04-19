import { ReactNode } from "react";
import styled from "styled-components";
import { color, font, spacing } from "styles/theme";

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
  display: flex;
  margin-bottom: ${spacing(3)}px;
`;

const SIconWrapper = styled.div`
  margin: 2px 0;
  font-size: 20px;
  line-height: 20px;
  margin-right: ${spacing()}px;
`;

const SH2 = styled.h2`
  color: ${color("neutrals", "black")};
  ${font("h4")}

  a {
    color: ${color("primary", "primary")};
  }
`;

const SDate = styled.p`
  color: ${color("neutrals", "grey")};
  ${font("footnote")}
  margin-bottom :${spacing()}px;
`;

const SText = styled.p`
  color: ${color("neutrals", "grey")};
  ${font("body")}

  a {
    color: ${color("primary", "primary")};
  }
`;
