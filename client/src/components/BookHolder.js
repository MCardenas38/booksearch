import React from "react";

function BookHolder(props){
    return(
        <div className="row">
            <div className="col">
                <img className="book_img" src={props.imgsrc} alt="" />
            </div>
            <div className="col border-bot">
                <h2>{props.title}</h2>
                <h5>{props.authors.join(", ")}</h5>
                <button type="button" className={props.layout==="search"?"btn btn-success":"btn btn-danger"} onClick={()=>props.handleIconclick(props._id)}>{props.message}</button>
                <p>
                    {props.description}
                </p>
                <a href={props.link}>More Info</a>
            </div>
        </div>
    );
}

export default BookHolder;