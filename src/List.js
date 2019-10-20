import React from "react";

const List = props => {
    return (
        <ul>
            {props.items
                ? props.items.map(x => <div key={x.id}>{x.item}</div>)
                : null}
        </ul>
    );
};
export default List;
