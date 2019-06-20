import React from "react";
import { Link } from "react-router-dom";

function Nav(props){
    return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <img className="logo" src="./images/logo.png" alt="" />
                    <div className="input-group mb-3 searchbar">
                        {
                            props.layout === "search"?
                                (<><input type="text" className="form-control" placeholder="Search Book..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={props.onChange}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick= {props.onClick}>Search</button>
                                </div></>)
                                : <div/>
                        }
                    </div>
                    <Link to={props.layout === "search"? '/saved':'/'}><button type="button" className="btn btn-outline-primary">{props.layout === "search"? 'Saved Books':'Go Back'}</button></Link>
                </nav>
            </div>
    );
}

export default Nav;