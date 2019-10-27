import React, { useState, useEffect } from "react";
import List from "./List";

const getSavedList = () => {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
        return list;
    }
    return [];
};
const App = () => {
    const [list, setList] = useState(getSavedList());
    const [newItem, setNewItem] = useState("");

    const onlistCheck = x => {
        let newList = [...list];
        newList[x].done = !newList[x].done;
        setList(newList);
    };

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <React.Fragment>
            <List items={list} onlistCheck={onlistCheck} />
            <input
                type="text"
                value={newItem}
                onChange={x => setNewItem(x.target.value)}
            ></input>
            <button
                onClick={() => {
                    if (!newItem) {
                        return;
                    }
                    let newList = [...list];
                    newList.push({
                        id: newList.length,
                        item: newItem,
                        done: false
                    });
                    setList(newList);
                    setNewItem("");
                }}
            >
                Add
            </button>
            <button onClick={() => setList([])}>Clear</button>
        </React.Fragment>
    );
};
export default App;
