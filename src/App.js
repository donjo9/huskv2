import React, { useState } from "react";
import List from "./List";

const App = () => {
    const [list, setList] = useState([
        { id: 1, item: "hej" },
        { id: 2, item: "mor" }
    ]);
    return (
        <React.Fragment>
            <List items={list} />
            <button
                onClick={() => {
                    let newList = [...list];
                    newList.push({ id: newList.length+1, item: "hejsa" });
                    setList(newList);
                }}
            >
                Add
            </button>
        </React.Fragment>
    );
};
export default App;
