import AccordionTitle from './AccordionTitle.jsx';
import AccordionBody from './AccordionBody.jsx';
import { useState } from 'react';
import { AccData } from './acc-data.js';
function Accordion() {
  const [ActiveAccordion, setActiveAccordion] = useState(0);


  function handleClick(clickedIndex) {
    console.log(clickedIndex)
    setActiveAccordion(clickedIndex);
  }
  return (
    <>
      {
        AccData.map((item, index) => (
          <>
            <AccordionTitle handleClick={handleClick} clickedIndex={index}>
              {item.question}
            </AccordionTitle>
            {ActiveAccordion == index &&
              <AccordionBody AccDetail={item.answer} />
            }
          </>
        ))
      }
    </>
  );
}
export default Accordion;