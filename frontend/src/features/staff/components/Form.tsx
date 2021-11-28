import React from 'react'
import useStaffMutation, { IFormInput } from '../hooks/useStaffMutation'
import prefectures from '../../../utils/prefecture'
import { Role } from '../../../api/generated/graphql'

type Props = {
  initialValues?: IFormInput
}

const Form: React.FC<Props> = ({ initialValues }) => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useStaffMutation({ initialValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='field mb-5'>
        <label className='label'>名前</label>
        <div className='control'>
          <input
            {...register('name', {})}
            type='text'
            className='input mb-2'
          />
        </div>
        {errors && errors.name && (
          <p className='help is-danger'>{errors.name.message}</p>
        )}
      </div>

      <div className='field mb-5'>
        <label className='label'>メールアドレス</label>
        <div className='control'>
          <input
            {...register('email', {})}
            type='text'
            className='input mb-2'
          />
        </div>
        {errors && errors.email && (
          <p className='help is-danger'>{errors.email.message}</p>
        )}
      </div>

      <div className='field mb-5'>
        <label className='label'>パスワード</label>
        <div className='control'>
          <input
            {...register('password', {})}
            type='text'
            className='input mb-2'
          />
        </div>
        {errors && errors.password && (
          <p className='help is-danger'>{errors.password.message}</p>
        )}
      </div>

      <div className='field mb-5'>
        <label className='label'>ロール</label>
        <div className='control'>
          <div className='select'>
            <select {...register('role', { required: true })}>
              <option value={Role.Staff}>{Role.Staff}</option>
              <option value={Role.Admin}>{Role.Admin}</option>
            </select>
          </div>
        </div>
        {errors && errors.role && (
          <p className='help is-danger'>{errors.role.message}</p>
        )}
      </div>

      <div className='control'>
        <button
          type='submit'
          className='button is-block is-primary is-fullwidth is-medium'
        >
          登録
        </button>
      </div>
    </form>

  )
}

export default Form
