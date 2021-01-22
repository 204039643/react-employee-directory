import React from 'react'

const Row = ({ firstName }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{firstName}</td>
            <td>response data</td>
            <td>response data</td>
            <td>response data</td>
            <td>response data</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Row
