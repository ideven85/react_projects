import React from "react";

const ListItem  = (props) => {

    const { name,link,icon,bgColor } = props.d;

    // Code here
    return ( <div
            className="ListItem"
            style={{
                height: 30
            ,backgroundColor:bgColor
            }}
        >
            <div>
      <img src={icon} alt={name}/>
      <a href={link}>{name}</a>
            </div>
    </div>
    );

}

export default ListItem;
