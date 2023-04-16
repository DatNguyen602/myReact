import React , {useRef,useState,useEffect} from "react";

const TodoLists = () => {
    const [List,setList] = useState([]);
    const TodoRef = useRef();
    const updateRef = useRef();
    const [ping,setPing] = useState(-1);

    const handleAddList = () => {
        if(TodoRef.current.value !== ""){
            const todo = TodoRef.current.value;
            TodoRef.current.value = "";
            setList([todo,...List]);
            console.log(TodoRef.current.value);
            console.log(todo);
        }
    }

    const handleDel = (index , array)=>{
        return () => {
            const newL = array.filter((value,id) => {
                return id !== index;
            })
            setList(newL);
        }
    }
    
    const clickToUpdate = (index)=> {
        return () => {
            setPing(index);
        }
    }
    
    const handleUpDate = () => {
        if(updateRef.current.value !== List[ping] && updateRef.current.value !== ""){
            List[ping] = updateRef.current.value;
        }
        setPing(-1);
    }
    
    useEffect (()=>{
        if (ping !== -1) {
            updateRef.current.value = List[ping];
            updateRef.current.focus();
        }
    },[ping])


    const keyEnterUp = (k) => {
        k.code === "Enter" && handleUpDate();
    }
    
    const TodoList = () =>{
        return <React.Fragment>
            {List.map((value,index,array)=>{
            return <div key={Math.random()} className="List">
                    <p>{value}</p>
                        <div>
                            <button onClick={handleDel(index,array)}>
                                <img src="https://raw.githubusercontent.com/DatNguyen602/Bai1/code5/public/Del.png" alt="X"/>
                            </button>
                            <button onClick={clickToUpdate(index)}>
                            <img src="https://raw.githubusercontent.com/DatNguyen602/Bai1/code5/public/Update.png" alt="V"/>
                            </button>
                        </div>
                    </div>
            })}
        </React.Fragment>
    }
    
    const Form = () => {
        return <div className="btnIn">
            <input ref={updateRef} type="text" onKeyDown={keyEnterUp} className="BorderOfUpdate" placeholder="Add a todo" id="InputTodo" />
            <button className= "ColorOfUpdate" onClick={handleUpDate}>Add Todo</button>
        </div>
    }


    return <div className="set-backG">
        <div className="container">
            <h1>What's the Plan for Today</h1>
            <div className="btnIn">
                <input ref={TodoRef} type="text" placeholder="Add a todo" id="InputTodo" />
                <button  onClick={handleAddList}>Add Todo</button>
            </div>
            {ping === -1 ? <TodoList/> : <Form/>}
        </div>
    </div>
}

export default TodoLists;