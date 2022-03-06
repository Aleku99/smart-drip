import React from 'react'
import axios from 'axios'
function handleSubmit() {
  let mode = 2
  axios
    .post('http://192.168.100.78:3001/change_config', {
      mode: mode,
    })
    .then((response) => {
      console.log(response)
    })
}
function Automatic() {
  //TODO: check why axios.post is called 2 times
  handleSubmit()
  return <div className="automatic"></div>
  // return (
  //   <div className="automatic">
  //     <button onClick={handleSubmit}>Submit</button>
  //   </div>
  // )
}
export default Automatic
