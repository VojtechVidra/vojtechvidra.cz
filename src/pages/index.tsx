import { Container } from "components/Container";
import { TimelineItem } from "components/TimelineItem";
import { timelineData } from "data/timeline-data";
import styled from "styled-components";
import { sx } from "styles";
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
            web developer from Prague, Czech Republic. I love building beautiful
            UIs in React and Typescript. When I&apos;m not coding, I&apos;m
            probably riding mountain bikes.
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
  color: ${sx.color("neutral.text")};
  ${sx.font("h1")}
  margin-bottom: ${sx.spacing(2)};
`;

const SPerex = styled.p`
  color: ${sx.color("neutral.textSubtle")};
  ${sx.font("perex")}

  margin-bottom: ${sx.spacing(8)};
`;

const STimeline = styled.div`
  max-width: 424px;
  width: 100%;
`;
