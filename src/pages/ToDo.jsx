import React, { useState } from 'react';


function ToDo() {
    const [newItem, setNewItem] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    const handleItemChange = (e) => {
        setNewItem(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, { text: newItem, complete: false }])
        setNewItem(''); //clears the input after submitting 
    }

    const deleteItem = (index) => {
        setTodoItems(prev => prev.filter((_, i) => i !== index))
        // filters so doesnt include item we want to delete 
    }

    const markAsComplete = (index) => {
        setTodoItems(prev => prev.map((item, i) => {
            (i === index) ? { ...item, complete: !item.complete } : item
        }))

        // for every item, if its the one we clicked on, toggle the complete to be the opposite of what its set to rn
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <div className="todo-page">
                <input type="text" placeholder="Add a new item" value={newItem} onChange={handleItemChange} />
                <button onClick={addItem} type="onSubmit">Add Item</button>
            </div>
            <ol>
                {todoItems.map((item, index) => {
                    return (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{
                                textDecoration: item.complete ? "line-through" : "none",
                                opacity: item.complete ? 0.6 : 1,
                                flex: 1
                            }}>
                                {item.text}
                            </span>
                            <div>
                                <button onClick={() => markAsComplete(index)}> {item.complete ? "Undo" : "Complete"}</button>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        </li>

                    )
                })}
            </ol>
        </div>
    )
}

export default ToDo;