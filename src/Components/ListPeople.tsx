import React from 'react';


interface IProps {
    people: {
      name:string,
      age: number,
      url: string,
      note?: string
    }[]
  }



const List: React.FC<IProps> = ({people }) => {

    const Renderpeople = () => {
        return(people.map(person => {
           return( <li>
                <div>{person.name}</div>
                <div>{person.age}</div>
                <img src={person.url} height="200" width="200" alt="" />
            </li>
        )}))
    }

    return (
        <ul>
           {Renderpeople()}
        </ul>
    )
}

export default List;