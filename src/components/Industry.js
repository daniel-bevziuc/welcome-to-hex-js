import React from 'react'

function Industry ({ industry }) {
  return (
    <div className='container'>
      <h5 className='center'>
        What industry/area have you worked the longest?
      </h5>
      <p className='light'>{industry}</p>
    </div>
  )
}

export default Industry
