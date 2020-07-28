import React, {useState} from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import {searchHandler} from './components/utils/functions'

function App() {
  const [userArray, setUserArray] = useState([])
  const [som, setsom] = useState([])

  const getUserLists = (user) => {
    searchHandler.searchUserRepos(user).then((userInformation) => {
      if (userInformation.length > 0) {
        setUserArray(userInformation)
        userReposLanguages(user)
      } else {
        setUserArray(undefined)
      }
    })
  }

  const userReposLanguages = (user) => {
    searchHandler.searchUserRepos(user).then((userInformation) => {
      const stuff = (urls) => {
        Promise.all(
          urls.map(async (request) => {
            const response = await fetch(request)
            const data = await response.json()
            return data
          })
        ).then((values) =>
          setsom(
            values.map((m) =>
              Object.keys(m).reduce((acc, curr) => {
                return [
                  ...acc,
                  {
                    title: curr,
                    value: m[curr],
                    color: '#' + (((1 << 24) * Math.random()) | 0).toString(16),
                  },
                ]
              }, [])
            )
          )
        )
      }
      stuff(userInformation.map((m) => m.languages_url))
    })
  }

  return (
    <div className="App">
      <Navbar userReposLanguages={userReposLanguages} getUserLists={getUserLists} />
      <Main user={userArray} thepieArray={som} />
    </div>
  )
}

export default App
