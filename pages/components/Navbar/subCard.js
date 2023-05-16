import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = (props) => {

    return ( 
        <>
        <div className=" flex border border-black p-4 gap-2 hover:bg-custom-light-green4 cursor-pointer transition duration-300 ease-in-out">
          <div>
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-custom-dark-green">{props.title}</h2>
            <p className="text-custom-light-green3">{props.content}</p>
          </div>
        </div>  
        </>
     );
}
 
export default Card;