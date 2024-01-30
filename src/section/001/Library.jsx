import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="first" page={10}/>
            <Book name="second" page={10}/>
            <Book name="third" page={10}/>
        </div>
    )
}

export default Library;