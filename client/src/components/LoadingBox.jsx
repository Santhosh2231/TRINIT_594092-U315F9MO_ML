import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="spinner inline-block h-12 w-12 border-20 border-t-2 border-gray-400 rounded-full bg-white animate-spin"></div>
  </div>
  )
}

export default LoadingBox