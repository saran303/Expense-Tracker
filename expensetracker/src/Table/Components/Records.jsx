import React from 'react'

const Records = ({data}) => {

    const tableStyle = {
        width: "100%",
        margin: "0px",
    }
  return (  
    <table className="table" style={tableStyle}>
        <tbody >
            {data.map(item => (
                <tr style={{height:"40px"}}>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.role} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records