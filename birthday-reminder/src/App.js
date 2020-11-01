import React, { useState } from 'react'
import List from './List'
import data from './data'


function App() {

  const [persons, setPerson] = useState(data)
  return (
    <div>
      <main>
        <section className='container'>
          <h3>{persons.length} birthdays today</h3>
          <List persons={persons} />
          <button onClick={() => setPerson([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
