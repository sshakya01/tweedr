// Imports React library
import React from 'react'

// Creates a functional component
const Input = (props) => {

  // Passes out data to application
  return (
    <form id='Input' onSubmit={props.submit}>
      <input type="text" value={props.new} name="new" placeholder="Enter your Tweed here!" onChange={props.handleTweed} />
      <button>Submit</button>
    </form>
  )
}

// Makes the function available to the app
export default Input
