import React from 'react'
import axios from 'axios'
import { updateConfiguration } from '../api/firebase'

function Automatic(props) {
  function handleSubmit() {
    let mode = '2'
    axios
      .post(
        'http://192.168.100.78:3001/change_config',
        {
          mode: mode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.alert('Configuration updated succesfully')
        } else {
          window.alert('Configuration not updated')
        }
        console.log(response)
      })
    let config = { mode: mode }
    updateConfiguration(config)
  }
  React.useEffect(() => {
    handleSubmit()
    props.updateEventList()
  }, [])
  return <div className="automatic"></div>
}
export default Automatic
