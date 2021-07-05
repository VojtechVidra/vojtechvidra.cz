import { Container } from "components/Container";
import { TimelineItem } from "components/TimelineItem";
import { timelineData } from "data/timeline-data";
import styled from "styled-components";
import { color, font, spacing } from "styles/theme";
import Head from "next/head";
import { Footer } from "components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vojta Vidra</title>
      </Head>

      <Container>
        <main>
          <SH1>Hey, I&apos;m Vojta,</SH1>
          <SPerex>
            web developer from Prague, Czech Republic. I’m working mainly with
            React and TypeScript, but I enjoy everything JavaScript related.
          </SPerex>

          <STimeline>
            {timelineData.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.title}
                date={item.date}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </STimeline>
        </main>
      </Container>
      <Footer />
    </>
  );
}

const SH1 = styled.h1`
  color: ${color("neutrals", "black")};
  ${font("h1")}
  margin-bottom: ${spacing(2)}px;
`;

const SPerex = styled.p`
  color: ${color("neutrals", "grey")};
  ${font("perex")}

  margin-bottom: ${spacing(4)}px;
`;

const STimeline = styled.div`
  max-width: 424px;
  width: 100%;
`;
