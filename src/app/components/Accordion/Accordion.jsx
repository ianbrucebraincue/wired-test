"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem.jsx";
import styles from "./Accordion.module.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} isOpen={openIndex === index} onToggle={() => handleToggle(index)}>
          {item.content}
        </AccordionItem>
      ))}
    </ul>
  );
}