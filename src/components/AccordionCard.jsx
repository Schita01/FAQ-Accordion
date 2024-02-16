import React, { useState } from 'react';
import styles from "./AccordionCard.module.css"
import illustrationBoxImg from "../assets/illustration-box.svg"
import illustrationWomanImg from "../assets/illustration-woman.svg"
import arrowImg from "../assets/icon-arrow.svg"
import AccordionItem from './AccordionItem';
const AccordionCard = () => {

    const [activeAccordionNumber, setActiveAccordionNumber] = useState(null)

    const handleClick = (accordionNumber) => {
      if(activeAccordionNumber === accordionNumber) {
        setActiveAccordionNumber(null)
      }else {
        setActiveAccordionNumber(accordionNumber)

      }
    }
    return (
       <>
        <div className={styles.accordionCardComponent}>
            {/* left container */}
            <div className={styles.illustration}>
                <img className={styles.illustrationBox} src={illustrationBoxImg} alt="" />
                <img className={styles.illustrationWoman} src={illustrationWomanImg} alt="" />
            </div>

            {/* right container */}

            <div className={styles.faq}>
            <h1 class="faqTitle">FAQ</h1>
          {/* 1 */}
            <div className={styles.accordion}>

            <AccordionItem
          activeAccordionNumber={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={1}
          itemTitle="How many team members can I invite?"
          itemText="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
          arrowImg={arrowImg}
          />
        
            </div>
            </div>
        </div>
       </>
    );
}

export default AccordionCard;
