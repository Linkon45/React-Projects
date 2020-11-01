import React from 'react'

const List = ({ persons }) => {
    return (
        <div>
            {
                persons.map((person) =>

                    <article key={person.id} className='person'>
                        <img src={person.image}  />
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age} years</p>
                        </div>
                    </article>


                )
            }
        </div>
    )
}

export default List
