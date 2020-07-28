import React, {useState} from 'react'
import './Navbar.scss'

function Navbar({getUserLists}) {
  const [userInput, setUserInput] = useState('')

  return (
    <div className="Navbar">
      <div className="field-row">
        <input
          type="text"
          id="Search for users repository languages"
          value={userInput}
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
        <label
          className={`label`}
          for="Search for users repository languages"
          title="Search for users repository languages"
          data-title="Search for users repository languages"
        />
      </div>
      <button className="button" onClick={() => getUserLists(userInput)}>
        Search
      </button>
    </div>
  )
}

export default Navbar
