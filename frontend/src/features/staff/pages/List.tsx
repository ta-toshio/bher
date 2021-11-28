import { NextPage } from 'next'
import React from 'react'
import StaffLayout from '../../../components/layout/Staff'
import List from '../components/List'
import useStaffList from '../hooks/useStaffList'

const ListPage: NextPage = () => {
  const { data } = useStaffList()

  return (
    <StaffLayout>
      <div className='columns'>
        <div className='column'>
          <List data={data} />
        </div>
      </div>
    </StaffLayout>
  )
}

export default ListPage
