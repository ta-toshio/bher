import React from 'react'
import { Role } from '../../../api/generated/graphql'
import useStaffEdit, { IFormInput } from '../hooks/useStaffEdit'

type Props = {
  initialValues: IFormInput | undefined
}

const EditForm: React.FC<Props> = ({ initialValues }) => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useStaffEdit({ initialValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register('id', {})} type='hidden' />

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
          更新
        </button>
      </div>
    </form>

  )
}

export default EditForm
