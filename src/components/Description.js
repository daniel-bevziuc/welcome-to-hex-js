import React from 'react'

function Description ({ description }) {
  return (
    <div className='container'>
      <h5 className='center'>
        What makes you stand out for this role and what do you hope to achieve?
      </h5>
      <p className='light'>{description}</p>
    </div>
  )
}

export default Description
