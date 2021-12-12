import { NextPage } from 'next'
import React from 'react'
import StaffLayout from '../../../components/layout/Staff'
import AddForm from '../components/AddForm'

const AddPage: NextPage = () => {
  return (
    <StaffLayout>
      <div className='columns'>
        <div className='column'>
          <AddForm />
        </div>
      </div>
    </StaffLayout>
  )
}

export default AddPage
