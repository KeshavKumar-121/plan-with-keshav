import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function Card({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore]=useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`

    function readmoreHandler(){
        setReadmore(!readmore)
    }
    return(
        <div className="card">
            <img src={image} className="image"></img>
            
            <div className="tourDetails">
                <h4 className="tour-Price"><FaRupeeSign/> {price}</h4>
                <h4 className="tour-Name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less`: `read more`}
                </span>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );

}

export default Card;