import {useState} from "react";

const TodoList =({title})=>{      //const TodoList =({props}) you can write like that also
    //  const {title } = props;
    // const items = ["Item1","Item2","item3","Item4","Item5","item6"];
    // let newItem = '';
    const[items,setItems] = useState(["Item1","Item2","item3","Item4","Item5","item6"]);
    const[newItem,setNewItems] = useState('')

    const handleAddTodo = (event)=>{
        const newItems = [...items,newItem]
        setItems(newItems)
    }

    const handleChange = (event)=>{
        // newItem = event.target.value
        setNewItems(event.target.value)
    }
    return (
        <div>
            {newItem}
            <h1>{title ? title : 'TodoList'}</h1>
            <div style={{display : 'flex'}}>
                <input type='text' placeholder="Enter new Todo"  onChange={handleChange}/>
                <button onClick={handleAddTodo}>Add</button>   {/* React  way */}
            </div>
            <ul>
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList