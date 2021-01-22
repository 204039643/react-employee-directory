import React, { useEffect, useState } from 'react'
import Table from '../components/table/table'
import Row from '../components/row/row'
import axios from 'axios'

const Home = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then(function (response) {
        // handle success
        let fullName = `${response.data.results[0].name.first} ${response.data.results[0].name.last}`
        console.log(fullName)
        setResults(response.data.results[0])
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
        firstName={result.data.results[0].name} />
      ))}
    </div>
  )
}

export default Home
