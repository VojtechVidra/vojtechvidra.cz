import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  date: ReactNode;
  text: ReactNode;
  icon: ReactNode;
}

export const TimelineItem = ({ date, icon, text, title }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr] mb-8">
      <div className="text-[24px] leading-[24px] my-0.5 mr-2">{icon}</div>
      <div>
        <h2 className="text-h4 text-neutral-text [&>a]:text-primary-text [&>a]:transition [&>a]:hover:text-primary-textHover hover:[&>a]:underline">
          {title}
        </h2>
        <p className="text-footnote text-neutral-textSubtle mb-2">{date}</p>
        <p className="text-body text-neutral-textSubtle  [&>a]:text-primary-text [&>a]:transition [&>a]:text-label hover:[&>a]:text-primary-textHover">
          {text}
        </p>
      </div>
    </div>
  );
};
