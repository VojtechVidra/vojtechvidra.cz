import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  date: ReactNode;
  text: ReactNode;
  icon: ReactNode;
}

export const TimelineItem = ({ date, icon, text, title }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-2 mb-10">
      <div className="text-[24px] leading-[24px] my-0.5 ">{icon}</div>
      <div>
        <h2 className="text-h4 text-neutral-text [&>a]:text-primary-foreground [&>a]:transition [&>a]:hover:underline mb-0.5">
          {title}
        </h2>
        <p className="text-footnote text-muted-foreground mb-2">{date}</p>
        <p className="text-body text-neutral-textSubtle  [&>a]:text-primary-foreground [&>a]:transition [&>a]:text-label [&>a]">
          {text}
        </p>
      </div>
    </div>
  );
};
