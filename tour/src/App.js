import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [empty, setEmpty] = useState(true)

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }



  useEffect(() => {

    setLoading(true)
    axios.get(url)
      .then(function (response) {
        // handle success
        setLoading(false)
        console.log(response.data);
        setTours(response.data)
      })
      .catch(function (error) {

        // handle error
        setLoading(false)
        console.log(error);
      });
  }, [empty])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );

  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => setEmpty(!empty)}>refresh</button>
        </div>
      </main>


    )
  }



  return (
      <main>
      <Tours tours={tours} removeTour={removeTour} />
      </main>
  );
}

export default App;
