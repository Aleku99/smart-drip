import React from 'react'
import axios from 'axios'
function handleSubmit() {
  let mode = 2
  console.log(mode)
  axios
    .post('http://192.168.100.78:3001/change_config', {
      mode: mode,
    })
    .then((response) => {
      console.log(response, 'azsdchbjmk')
    })
}
function Automatic() {
  handleSubmit()
  return <div className="automatic"></div>
}
export default Automatic
