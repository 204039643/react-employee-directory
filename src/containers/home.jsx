import React, { useEffect, useState } from 'react'
import Table from '../components/table/table'
import Row from '../components/row/row'
import axios from 'axios'


const Home = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=20')
      .then(function (response) {
        // handle success
        setResults(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <div>
      <Table />
      {results.map(result => (
        <Row 
        key={result._id}
        imageURL={result.picture.thumbnail}
        firstName={result.name.first}
        lastName={result.name.last}
        location={result.location.country}
        email={result.email}/>
      ))}
    </div>
  )
}

export default Home
