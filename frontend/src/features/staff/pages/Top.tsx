import { NextPage } from 'next'
import React from 'react'
import StaffLayout from '../../../components/layout/Staff'
import { useRequireLogin } from '../../../contexts/auth/useRequireLogin'
import { staff } from '../../../contexts/auth/user'

const TopPage: NextPage = () => {
  const { checking } = useRequireLogin(staff)
  if (checking) return <></>

  return (
    <StaffLayout>
      <div className='columns'>
        <div className='column'>
          test
        </div>
      </div>
    </StaffLayout>
  )
}

export default TopPage
