import { useState } from 'react';

export interface AccordionProps {
  data: AccordionItemProps[];
}

interface AccordionItemProps {
  index: number;
  title: string;
  content: string;
}

export const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  if (!data) {
    return <div>No data provided!</div>;
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div
            key={dataItem.index}
            className="accordion-item"
            onClick={() => setSelected(dataItem.index)}
          >
            <div>{dataItem.title}</div>
            {selected === dataItem.index && <div>{dataItem.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};
