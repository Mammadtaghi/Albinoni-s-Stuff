import React from 'react'
import './index.scss'
import Button from '../../Components/Common Components/Button'

function Error() {
  return (
    <main>
      <section id='Error'>
        <div className="errorTextBox">
          <h1 className='errorTitle'>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
        </div>
        <Button alignSelf='center' fontSize='16px'>Back To Home Page</Button>
      </section>
    </main>
  )
}

export default Error