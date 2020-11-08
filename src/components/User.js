import React from 'react'

function User({ user }) {
  return (
    <div className="container user-hero__section">
      <div className="hero-img">
        <img src={user.avatar} alt="" width="150px" />
      </div>
      <div className="hero-descr">
        <h1>{user.name} </h1>
        <p>{user.position}</p>
      </div>
    </div>
  )
}

export default User
