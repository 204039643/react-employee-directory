import React from 'react'

const Row = ({ imageURL, firstName, lastName, location, email }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img src={imageURL} alt='employee thumbnail' />
          </td>
          <td className='tdCSS'>
            {firstName} {lastName}
          </td>
          <td className='tdCSS'>{location}</td>
          <td className='tdCSS'>{email}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Row
