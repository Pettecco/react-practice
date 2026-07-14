import { AccordionItemData } from './Accordion';
import './Accordion.css';

interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onClick: (index: number) => void;
}

export const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: AccordionItemProps) => (
  <div className="accordion-item" onClick={() => onClick(item.index)}>
    <div className="accordion-title">{item.title}</div>
    {isOpen && <div className="accordion-content">{item.content}</div>}
  </div>
);
