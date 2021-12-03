import React from "react";

function Automatic() {
  function handleSubmit() {
    let mode = 2;
    console.log(mode);
  }
  handleSubmit();
  return <div className="automatic"></div>;
}
export default Automatic;
