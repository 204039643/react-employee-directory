import React from 'react'


const Table = (props) => {
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col s6 centered'>
        <a className='waves-effect waves-light btn-small'
          onClick={props.handleSort}>
            <i className='material-icons'>sort_by_alpha</i>  Sort Last Name</a>
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
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Table
