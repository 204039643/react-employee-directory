import React from 'react'
import Row from '../row/row'


const Table = ({handleSort, sortedResults}) => {
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col s6 centered'>
        <a className='waves-effect waves-light btn-small' href="/"
          onClick={handleSort}>
            <i className='material-icons'>sort_by_alpha</i>  Sort by Email</a>
        </div>
        <form className='col s6 centered'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>filter_list</i>
            <textarea id='textarea1' className='materialize-textarea'></textarea>
            <label htmlFor='textarea1'>Type to filter by location</label>
          </div>
        </form>
      </div>
      <table>
        <thead className='tdCSS'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
        {sortedResults.map(result => (
        <Row
          key={result.login.uuid}
          imageURL={result.picture.thumbnail}
          firstName={result.name.first}
          lastName={result.name.last}
          location={result.location.country}
          email={result.email}
          gender={result.gender}
        />
      ))}
        </tbody>
      </table>

    </div>
  )
}

export default Table
