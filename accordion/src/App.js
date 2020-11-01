import React, { useState } from 'react'
import questions from './data';
import data from './data'
import Question from './Question'
function App() {

  const [questions, setquestion] = useState(data)

  return (

    <main>
      <div className="container">
        <h3>
          Questions and Ansewers about login
        </h3>
        <section className="info">
          {
            questions.map((question) =>
              <Question key={question.id} {...question} />
            )
          }

        </section>
      </div>

    </main>

  );
}

export default App;
