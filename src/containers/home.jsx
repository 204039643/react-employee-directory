import React, { useEffect, useState } from 'react'
import Table from '../components/table/table'
import Row from '../components/row/row'
import Navbar from '../components/navbar/navbar'
import axios from 'axios'


const Home = () => {
  const [results, setResults] = useState([])
  const [sortedResults, setSortedResults] = useState([])

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=20')
      .then(function (response) {
        // handle success
        setResults(response.data.results)
        setSortedResults(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  function handleSort () {
    // console.log(“clicked button”);
    const sortedEmployees = results.sort((a, b) => {
      return a.nat < b.nat ? -1 : 1
    })
    console.log(sortedEmployees);
    setSortedResults(sortedEmployees)
}

//   handleFilter = (event) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = target;
//     const filteredEmployees = this.state.employees.filter((employee) => {
//       return (
//         employee.name.first.includes(value) ||
//         employee.name.last.includes(value)
//       );
//     });
//     this.setState({
//       [name]: value,
//       filteredEmployees: filteredEmployees,
//     });
//   };

  return (
    <div>
      <Navbar />
      <Table 
      handleSort = {handleSort}/>
      {sortedResults.map(result => (
        <Row
          key={result.login.uuid}
          imageURL={result.picture.thumbnail}
          firstName={result.name.first}
          lastName={result.name.last}
          location={result.location.country}
          email={result.email}
        />
      ))}
    </div>
      )
}


export default Home
