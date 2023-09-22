import { TimelineItem } from "../components/TimelineItem";
import { timelineData } from "../data/timeline-data";

export default function Page() {
  return (
    <main className="max-w-3xl m-auto px-4">
      <h1 className="text-h1 mb-4 text-neutral-text mt-12">
        Hey, I&apos;m Vojta,
      </h1>
      <p className="text-perex mb-16  text-neutral-text">
        web developer from Prague, Czech Republic. I love building beautiful UIs
        in React and Typescript. When I&apos;m not coding, I&apos;m probably
        riding mountain bikes.
      </p>
      <div className="max-w-[424px]">
        {timelineData.map((item, i) => (
          <TimelineItem
            key={i}
            title={item.title}
            date={item.date}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
    </main>
  );
}
