import React from 'react'
import axios from 'axios'
function handleSubmit() {
  let mode = 2
  axios
    .post('http://192.168.100.78:3001/change_config', {
      mode: mode,
    }, {
      headers: {
          'Content-Type': 'application/json',
      }
  })
    .then((response) => {
      console.log(response)
    })
}
function Automatic() {
  React.useEffect(()=>{
    handleSubmit()
  })
  return <div className="automatic"></div>
}
export default Automatic
