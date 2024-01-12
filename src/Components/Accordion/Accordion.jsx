import AccordionTitle from './AccordionTitle.jsx';
import AccordionBody from './AccordionBody.jsx';
import { useState } from 'react';
import { AccData } from './acc-data.js';
function Accordion() {
  const [ActiveAccordion, setActiveAccordion] = useState(0);
  const index = 0;

  function handleClick(clickedIndex) {
   
    setActiveAccordion(clickedIndex);
  }
  return (
    <>
      {
        AccData.map((item, index) => (
          <>
            <AccordionTitle
            className = { ActiveAccordion == index ? "btn-primary" : "btn-outline-primary" }  
            handleClick={handleClick} clickedIndex={index}>
            {item.question}

            <span className='icon'>{ ActiveAccordion == index ? "-" : "+" }</span>
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