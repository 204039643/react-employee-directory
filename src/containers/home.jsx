import React, { useEffect, useState } from 'react'
import Table from '../components/table/table'
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
    console.log('clicked button')
    function compare (a, b) {
      if (a.email < b.email) {
        return -1
      }
      if (a.email > b.email) {
        return 1
      }
      return 0
    }
    results.sort(compare)
    console.log(results)
    setSortedResults(results)
  }

  // const handleSort = (event) => {
  //   const sortEmployee = [...results];
  //   const sortedEmployees = sortEmployee.sort((a,b) => (a.email > b.email ? 1 : -1))
  //   setResults(sortedEmployees);
  //   console.log(results)
  // };

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
      <Table sortedResults={sortedResults}
      handleSort={() => handleSort}>
     </Table>
    </div>
  )
}

export default Home
