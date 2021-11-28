import { NextPage } from 'next'
import React from 'react'
import StaffLayout from '../../../components/layout/Staff'
import Form from '../components/Form'

const AddPage: NextPage = () => {
  return (
    <StaffLayout>
      <div className='columns'>
        <div className='column'>
          <Form />
        </div>
      </div>
    </StaffLayout>
  )
}

export default AddPage
