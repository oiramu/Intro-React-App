import React from "react";

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem
  
    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorage.getItem(itemName));
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    }
  
    return [item, saveItem];
}

export { useLocalStorage };