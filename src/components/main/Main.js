import React, {useState} from 'react'
import './Main.scss'
import {PieChart} from 'react-minimal-pie-chart'

function Main({user, thepieArray = {}}) {
  if (user) {
    return (
      <div className="main">
        {user.map((us, index) => {
          const linkContent = thepieArray[index]
          return (
            <div className="card" key={us.id}>
              <p className="name">{us.name}</p>
              <p className="description">{us.description}</p>
              <p>
                {' '}
                {linkContent
                  ? linkContent.map((m, i) => (
                      <li className="lies">
                        {i + 1}-{m.title}
                      </li>
                    ))
                  : null}
              </p>
              <PieChart
                className="pie"
                data={linkContent}
                label={({dataEntry}) => Math.round(dataEntry.percentage) + '%'}
              />
            </div>
          )
        })}
      </div>
    )
  } else {
    return <p className="userNotFound">User not found</p>
  }
}

export default Main
