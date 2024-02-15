import React, { useState } from 'react';
import styles from "./AccordionCard.module.css"
import illustrationBoxImg from "../assets/illustration-box.svg"
import illustrationWomanImg from "../assets/illustration-woman.svg"
import arrowImg from "../assets/icon-arrow.svg"
const AccordionCard = () => {

    const [activeAccordionNumber, setActiveAccordionNumber] = useState(null)
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

            <div className={styles.accordion}>
                <button
                 onClick={() => {
                    setActiveAccordionNumber(1)
                 }}
                 className={styles.accordionBtn}>      
                    <span>How many team members can I invite?</span>
                    <img src={arrowImg} alt="" />
                </button>
                <div className={styles.accordionTextContainer}>
                  {activeAccordionNumber === 1 ?   
                      <span>
                      You can invite up to 2 additional users on the Free plan.
                      There is no limit on team members for the Premium plan.
                    </span> : null
                  }
                </div>
                <button
                 onClick={() => {
                    setActiveAccordionNumber(2)
                 }}
                 className={styles.accordionBtn}>      
                    <span>How many team members can I invite?</span>
                    <img src={arrowImg} alt="" />
                </button>
                <div className={styles.accordionTextContainer}>
                  {activeAccordionNumber === 2 ?   
                      <span>
                      You can invite up to 2 additional users on the Free plan.
                      There is no limit on team members for the Premium plan.
                    </span> : null
                  }
                </div>
                <button
                 onClick={() => {
                    setActiveAccordionNumber(3)
                 }}
                 className={styles.accordionBtn}>      
                    <span>How many team members can I invite?</span>
                    <img src={arrowImg} alt="" />
                </button>
                <div className={styles.accordionTextContainer}>
                  {activeAccordionNumber === 3 ?   
                      <span>
                      You can invite up to 2 additional users on the Free plan.
                      There is no limit on team members for the Premium plan.
                    </span> : null
                  }
                </div>
            </div>
            </div>
        </div>
       </>
    );
}

export default AccordionCard;
