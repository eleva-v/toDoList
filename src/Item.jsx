import React, { useState, useEffect } from "react";

const Item = ({ match: { params: { id } } }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/${id}`, {
            method: `GET`
        }).then(response => response.json())
            .then(({ data }) => setItem(data));
    }, [id]);
    if (!item) {
        return 'Loading...'
    }

    return <div style={{ padding: 20, border: '1px solid #ccc' }}> {item.id} : {item.text} </div >
}

export default Item;