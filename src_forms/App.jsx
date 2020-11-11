import React, { useState } from 'react';

function App() {

  // const [color, setColor] = useState("");
  // const [essay, setEssay] = userState("");

  const [state, setState] = useState({color: "", essay: ""});

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    setState({
      color: "", 
      essay: ""
    });
  }

  return (
    <div>
      <h3>SURVEY!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Favorite Color</label>
        <input 
          id="color"
          name="color" 
          type="text" 
          value={state.color}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="essay">Does pineapple belong on pizza</label>
        <textarea
          value={state.essay}
          id="essay"
          name="essay"
          rows="10"
          onChange={handleChange}
        >
        <br />
        </textarea>
        <input type="submit" />
      </form>
      <p>you like the: {state.color} color bruh.</p>
    </div>
  );
}

export default App;
