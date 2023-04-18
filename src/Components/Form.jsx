import { useState } from "react";

const Form = () => {
    // const [firstName,setFirstName] = useState('');
    // const handleInputFirstName = (e) => {
    //     setFirstName(e.target.value);
    //     console.log(firstName);
    //     console.log(e.target);
    // }

    const [fullName,setFullName] = useState({
        firstname: '',
        lastname: '',
        checkbox: false,
    })

    const handleInputChange = (e) => {
        setFullName({
            ...fullName,
            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName.firstname);
        console.log(fullName.lastname);
    }

    return <form action={handleSubmit}>
        <input 
            type="text" 
            name="firstname" 
            onChange={handleInputChange} 
            className="input" 
            placeholder="Enter your first name?" 
        />
        <br/>
        <input 
            type="text"
            name="lastname"
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your last name?" 
        />
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
}

export default Form;