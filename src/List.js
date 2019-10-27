import React from "react";

const List = props => {
    return (
        <ul>
            {props.items
                ? props.items.map(x => (
                      <div key={x.id}>
                          {x.item}
                          <input
                              type="checkbox"
                              defaultChecked={x.done}
                              onChange={() => props.onlistCheck(x.id)}
                          ></input>
                      </div>
                  ))
                : null}
        </ul>
    );
};
export default List;
