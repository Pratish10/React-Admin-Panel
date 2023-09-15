import React from 'react'

const AddData = React.lazy(() => import('./views/addData/AddData'))
const Feedback = React.lazy(() => import('./views/feedback/Feedback'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/add-data', name: 'Add Data', element: AddData },
  { path: '/feedback', name: 'Feedback', element: Feedback },
]

export default routes
