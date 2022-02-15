import React from "react";
import axios from "axios";

function Automatic() {
  async function handleSubmit() {
    let mode = 2;
    console.log(mode);
    await axios
      .post("http://192.168.100.78:3001/change_config", {
        mode: mode,
      })
      .then((response) => {
        console.log(response);
      });
  }
  handleSubmit();
  return <div className="automatic"></div>;
}
export default Automatic;
