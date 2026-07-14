import { useEffect, useState } from 'react';
import './Accordion.css';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps {
  data: AccordionItemData[];
  enableMultiData?: boolean;
}

export interface AccordionItemData {
  index: number;
  title: string;
  content: string;
}

export const Accordion = ({
  data,
  enableMultiData = false,
}: AccordionProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  if (!data?.length) {
    return <div>No data provided!</div>;
  }

  useEffect(() => {
    setSelected([]);
  }, [enableMultiData]);

  const handleClick = (index: number) => {
    setSelected((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }

      if (!enableMultiData) {
        return [index];
      }

      return [...prev, index];
    });
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <AccordionItem
            key={dataItem.index}
            item={dataItem}
            isOpen={selected.includes(dataItem.index)}
            onClick={() => handleClick(dataItem.index)}
          />
        ))}
      </div>
    </div>
  );
};
