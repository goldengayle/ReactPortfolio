import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    

    const handleInputChange =(e) => {
    const {target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email'){
        validateEmail(inputValue)
            if (true) {
                setEmail(inputValue)
            } }
        

     if(inputType === 'name'){
        setName(inputValue)
     }


     if (inputType ==="message"){
        setMessage(inputValue)
     }
    }
   
    return (
        <div>
            <h3> Please fill out this form if you would like to connect</h3>
            < form align= "center" className ="form">
                <input 
                    value ={name}
                    name= "name"
                    onChange ={handleInputChange}
                    type ="name"
                    placeholder = "name"
                />
                <br></br>
                <input  
                    value ={email}
                    name="email"
                    onChange ={handleInputChange}
                    type = "email"
                    placeholder = "email"
                />
                <br></br>
                <input  
                    value ={message}
                    name = "message"
                    onChange = {handleInputChange}
                    type ="message"
                    placeholder ="message"
                />
                <br></br>
                <button className="bucket-button">Submit</button>


            </form>
    
        </div>
    )
}