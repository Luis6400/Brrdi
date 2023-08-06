import React from 'react';



export function ListWithSelectedItem() {
    const [selected, setSelected] = React.useState(1);
    const setSelectedItem = (value) => setSelected(value);
}