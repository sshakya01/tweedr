// Imports React library
import React from 'react'

// Creates a functional component
const Input = (props) => {

  // Passes out data to application
  return (
    <form onSubmit={props.submit}>
      <input type="text" value={props.new} name="new" placeholder="Enter your Tweed here!" onChange={props.handleTweed} />
      <button>Submit</button>
    </form>
  )
}

// Makes the function available to the app
export default Input
<<<<<<< HEAD

/* HANDLER METHODS TO BE MOVED OUT TO APP.JSX */
this.handleTweed = this.handleTweed.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)

// Handles
handleTweed(e) {
  this.setState({
    tweed: e.target.value,
  })
}

/* Handler */
handleSubmit(e) {
  e.preventDefault()

  // Connect to database and update
}
=======
>>>>>>> 1e82187b5da7ccd2b4e2e1c918ec830755064819
