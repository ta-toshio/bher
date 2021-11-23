import { NextPage } from 'next'
import React from 'react'
import NoLoggedInLayout from '../../../components/layout/Login'
import RegisterForm from '../components/RegisterForm'

const RegisterPage: NextPage = () => {
  return (
    <NoLoggedInLayout>
      <RegisterForm />
    </NoLoggedInLayout>
  )
}

export default RegisterPage
