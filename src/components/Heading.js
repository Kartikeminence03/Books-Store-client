import React from 'react'

const Heading = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
  <h1 className="text-3xl font-bold text-red-700">{props.heading}</h1>
</div>
  )
}

export default Heading