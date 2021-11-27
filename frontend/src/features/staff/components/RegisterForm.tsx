import React from 'react'
import useRegisterForm from '../hooks/useRegisterForm'
import styles from '../styles/RegisterForm.module.scss'

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useRegisterForm()

  return (
    <section className={styles.wrapper + ' container'}>
      <div className='columns is-multiline'>
        <div className='column is-8 is-offset-2'>
          <div className='columns'>
            <div className='column'>
              <h1 className='title is-4 has-text-centered'>なにかテキストあれば</h1>
              <p className='description has-text-centered'>ここにもなにかテキストあれば</p>

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

                <div className='control'>
                  <button
                    type='submit'
                    className='button is-block is-primary is-fullwidth is-medium'
                  >
                    登録
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
