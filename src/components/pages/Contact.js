import React, { useState } from 'react';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    

    const handleInputChange =(e) => {
    const {target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    

     if(inputType === 'name'){
        setName(inputValue)
     } else if (inputType === 'email'){
        setEmail(inputValue)
     } else {
        setMessage(inputValue)
     }
    }
   
    return (
        <div>
            <h3> Please fill out form if you would like to connect</h3>
            < form className ="form">
                <input 
                    value ={name}
                    name= "name"
                    onChange ={handleInputChange}
                    type ="name"
                    placeholder = "name"
                />
                <input  
                    value ={email}
                    name="email"
                    onChange ={handleInputChange}
                    type = "email"
                    placeholder = "email"
                />
                <input  
                    value ={message}
                    name = "message"
                    onChange = {handleInputChange}
                    type ="message"
                    placeholder ="message"
                />


            </form>
    
        </div>
    )
}