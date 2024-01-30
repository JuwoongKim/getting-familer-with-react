import React from "react";

function Book(props){
    return(
        <div>
            <h1>{`책 이름은 ${props.name}입니다.`}</h1>
            <h2>{`책 페이지 수는 ${props.page}입니다.`}</h2>
        </div>
    );
}

export default Book;