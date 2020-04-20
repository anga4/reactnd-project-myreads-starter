import React from "react";

function SelectShelf(props) {
    return (
        <select value={props.book.shelf || "none"} onChange={(e) => props.updateBookShelf(props.book, e.target.value)}>
            <option value="move" disabled>
                Move to...
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    );
}

export default SelectShelf;
