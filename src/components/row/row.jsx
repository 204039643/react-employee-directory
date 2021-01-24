import React from 'react'

const Row = ({ imageURL, firstName, lastName, location, email, gender}) => {
  return (
        <tr>
          <td>
            <img src={imageURL} alt='employee thumbnail' />
          </td>
          <td>
            {firstName} {lastName}
          </td>
          <td>{location}</td>
          <td>{email}</td>
          <td>{gender}</td>
        </tr>
  )
}

export default Row
