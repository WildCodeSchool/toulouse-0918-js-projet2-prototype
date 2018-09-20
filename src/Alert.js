import React from 'react'

const Alert = ({ alert: { status, message }}) => (
  <div className={ `alert alert-${status}` } role="alert">
    { message }
  </div>
)

export default Alert
