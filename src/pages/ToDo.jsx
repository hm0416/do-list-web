function ToDo() {
    const handleClick = () => {
        alert("button clicked")
    }
    return (
        <div className="todo-page">
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default ToDo;