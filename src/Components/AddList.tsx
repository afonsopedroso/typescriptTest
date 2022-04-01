import React, { Component, useState } from 'react'
import { setConstantValue } from 'typescript'
import {IState as props} from "../App"

interface Iprops {
    people: props["people"],
    addPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
} 

const AddList: React.FC<Iprops> = (props) => {
    const [person, setPerson] = useState({
        name: "",
        age: "",
        url: "",
        note:""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void{
        setPerson({
            ...person,
            [e.target.name]: e.target.value            
        })
    }

    function handleClick():void {
        
        if (!person.name || !person.age || !person.url ){
            return
        }
        props.addPeople([
            ...props.people,
            {
                name: person.name,
                age: parseInt(person.age),
                url: person.url,
                note: person.note

            }
        ])
            
    }

    return (
        <div>
            <input placeholder='name' name="name" onChange={handleChange} value={person.name} type="text" />
            <input placeholder='age' name='age' onChange={handleChange} value={person.age} type="text" />
            <input placeholder='url' name='url' onChange={handleChange} value={person.url} type="text" />
            <textarea placeholder='notes' name='note' onChange={handleChange}  value={person.note} />
            <button onClick={handleClick}>Add to List </button>
        </div>
    )
}
export default AddList;