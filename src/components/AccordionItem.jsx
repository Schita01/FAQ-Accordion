import React from 'react';
import styles from "./AccordionCard.module.css"


const AccordionItem = ({handleClick, activeAccordionNumber, itemNumber, itemTitle, itemText, arrowImg}) => {
    return (
        <>
       

       <button
                 onClick={() => handleClick(itemNumber)}
                 className={styles.accordionBtn}>      
                    <span className={styles.accordionTitle}>{itemTitle}</span>
                    <img src={arrowImg} alt="" />
                </button>
                <div className={styles.accordionTextContainer}>
                  {activeAccordionNumber === itemNumber ?   
                      <span className={styles.accordionText}>
                        {itemText}
                      </span> : null
                  }
                </div>
        </>
    );
}

export default AccordionItem;
