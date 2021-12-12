import { NextPage } from 'next'
import React from 'react'
import StaffLayout from '../../../components/layout/Staff'
import useStaff from '../hooks/useStaff'
import { useRouter } from 'next/router'
import EditForm from '../components/EditForm'
import { staffToFormData } from '../hooks/useStaffEdit'

const EditPage: NextPage = () => {
  const { query } = useRouter()
  const { data } = useStaff({ staffId: query.id})

  return (
    <StaffLayout>
      <div className='columns'>
        <div className='column'>
          <EditForm initialValues={data && staffToFormData(data) || undefined} />
        </div>
      </div>
    </StaffLayout>
  )
}

export default EditPage
