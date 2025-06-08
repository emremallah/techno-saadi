import Header from '@/components/header'
import React from 'react'

function layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
