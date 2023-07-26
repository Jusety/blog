import React from "react";
import classes from "./MyModal.module.css"

const MyModal = ({children, vision, setVision}) => {

    const rootClasses = [classes.MyModal]
    vision&&rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(" ")} onClick={()=>setVision(false)}>
           <div className={classes.MyModalContent} onClick={e=>{
           e.stopPropagation();
           }}>
                {children}
           </div>
        </div>
    )
};

export default MyModal;
