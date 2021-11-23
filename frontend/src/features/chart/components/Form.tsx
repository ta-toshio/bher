import React from 'react'
import styles from '../styles/Form.module.scss'
import prefectures from '../../../utils/prefecture'
import useChartForm, {
  experiences,
  IFormInput,
  noticeReasons, whenOptions,
} from '../hooks/useForm'

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useChartForm()

  return (
    <section className='container'>
      <div className='columns is-multiline'>
        <div className={styles.register + ' column is-8 is-offset-2'}>
          <div className='columns'>
            <div className={styles.formWrap + ' column'}>
              <h1 className='title is-4 has-text-centered'>なにかテキストあれば</h1>
              <p className='description has-text-centered'>ここにもなにかテキストあれば</p>

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className='field mb-5'>
                  <label className='label'>下記内容ご了承いただける場合チェックをお願いします。</label>
                  <div className='control'>
                    <input type='checkbox' value='1' {...register('my_checkbox', {})} />
                    <label className='label is-inline ml-2'>
                      ヘナ・マニキュア・ブローチ
                    </label>
                  </div>

                  <div className='control'>
                    <input type='checkbox' value='1' {...register('my_checkbox', {})} />
                    <label className='label is-inline ml-2'>
                      アルカリカラー
                    </label>
                  </div>

                  <div className='control'>
                    <input type='checkbox' value='1' {...register('my_checkbox', {})} />
                    <label className='label is-inline ml-2'>
                      髪の状態
                    </label>
                  </div>

                  <div className='control'>
                    <input type='checkbox' value='1' {...register('my_checkbox', {})} />
                    <label className='label is-inline ml-2'>
                      アレルギー
                    </label>
                  </div>
                  {errors && errors.my_checkbox && (
                    <p className='help is-danger'>ご了承お願いします。</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>パッチテストの実施をご希望されますか。（実施した場合、4時間以内はxxができません）</label>
                  <div className='control'>
                    <input {...register('patch', { required: true })} type='radio' value={1} />
                    <label className='label is-inline ml-2'>
                      実施する
                    </label>
                    <input {...register('patch', { required: true })} type='radio' value={0} className='ml-6' />
                    <label className='label is-inline ml-2'>
                      実施しない
                    </label>
                  </div>
                  {errors && errors.patch && (
                    <p className='help is-danger'>{errors.patch.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>ご年齢を下記からお選びください。</label>
                  <div className='control'>
                    {[10, 20, 30, 40, 50, 60].map((v, i) => (
                      <React.Fragment key={`gen-${v}`}>
                        <input
                          {...register('generation', { required: true })}
                          type='radio'
                          value={i+1}
                          className={i !== 0 ? 'ml-4' : ''}
                        />
                        <label className='label is-inline ml-2'>
                          {v}代{i === 5 ? '以降' : ''}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  {errors && errors.generation && (
                    <p className='help is-danger'>{errors.generation.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>性別を下記からお選びください。</label>
                  <div className='control'>
                    <input
                      {...register('gender', { required: true })}
                      type='radio'
                      value={1}
                    />
                    <label className='label is-inline ml-2'>
                      女性
                    </label>

                    <input
                      {...register('gender', { required: true })}
                      type='radio'
                      value={2}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>
                      男性
                    </label>
                  </div>
                  {errors && errors.gender && (
                    <p className='help is-danger'>{errors.gender.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    ヘアカラーをしてアレルギー反応が出たことありますか。
                    あるいはジミアンアレルギーだと医師に診断されたことがありますか。
                  </label>
                  <div className='control'>
                    <input
                      {...register('allergy', { required: true })}
                      type='radio'
                      value={0}
                    />
                    <label className='label is-inline ml-2'>
                      ない
                    </label>

                    <input
                      {...register('allergy', { required: true })}
                      type='radio'
                      value={1}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>
                      ある
                    </label>
                  </div>
                  {errors && errors.allergy && (
                    <p className='help is-danger'>{errors.allergy.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    美容室でヘアカラーをした際に、かぶれやアレルギー症状が出たことがありますか。
                  </label>
                  <div className='control'>
                    <input
                      {...register('rash', { required: true })}
                      type='radio'
                      value={0}
                    />
                    <label className='label is-inline ml-2'>
                      ない
                    </label>

                    <input
                      {...register('rash', { required: true })}
                      type='radio'
                      value={1}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>
                      ある
                    </label>
                  </div>
                  {errors && errors.rash && (
                    <p className='help is-danger'>{errors.rash.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    美容室でヘアカラーをした際に、しみたことがありますか。
                  </label>
                  <div className='control'>
                    <input
                      {...register('sting', { required: true })}
                      type='radio'
                      value={0}
                    />
                    <label className='label is-inline ml-2'>
                      気にならない
                    </label>

                    <input
                      {...register('sting', { required: true })}
                      type='radio'
                      value={1}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>
                      気になる
                    </label>

                    <input
                      {...register('sting', { required: true })}
                      type='radio'
                      value={2}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>
                      とても気になる
                    </label>
                  </div>
                  {errors && errors.sting && (
                    <p className='help is-danger'>{errors.sting.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    前回はいつ、どこで染められましたか。
                  </label>
                  <div className='control'>
                    <label className='label is-inline mr-6'>いつ</label>
                    <div className='select is-small'>
                      <select {...register('dye_when', { required: true })}>
                        {whenOptions.map(whenOption => (
                          <option
                            key={`when-option-${whenOption.value}`}
                            value={whenOption.value}
                          >
                            {whenOption.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {errors && errors.dye_when && (
                    <p className='help is-danger'>{errors.dye_when.message}</p>
                  )}

                  <div className='control'>
                    <label className='label is-inline mr-6'>どこで</label>

                    <input
                      {...register('dye_where', {})}
                      type='radio'
                      value={"0"}
                    />
                    <label className='label is-inline ml-2'>なし</label>

                    <input
                      {...register('dye_where', {})}
                      type='radio'
                      value={"1"}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>自宅</label>

                    <input
                      {...register('dye_where', {})}
                      type='radio'
                      value={"2"}
                      className='ml-4'
                    />
                    <label className='label is-inline ml-2'>美容院</label>
                  </div>
                  {errors && errors.dye_where && (
                    <p className='help is-danger'>{errors.dye_where.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    以下のメニューを1年以内に利用されたことはありますがありますか。ある場合は時期もお応えください。
                  </label>

                  {experiences.map((experience, i) => (
                    <React.Fragment key={`experience-${i}`}>
                      <div className='control'>
                        <label className='label is-inline mr-6'>{experience.label}</label>
                        <div className='select is-small'>
                          <select {...register(experience.keyUnit as keyof IFormInput, {})}>
                            {whenOptions.map(whenOption => (
                              <option
                                key={`when-option-${whenOption.value}`}
                                value={whenOption.value}
                              >
                                {whenOption.text}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/*
                        <input
                          {...register(experience.key as keyof IFormInput, {})}
                          type='number'
                          placeholder={'10'}
                          className='input is-small'
                          style={{ width: '60px' }}
                        />
                        <div className='select is-small'>
                          <select {...register(experience.keyUnit as keyof IFormInput, {})}>
                            <option value='day'>日前</option>
                            <option value='month'>ヶ月前</option>
                          </select>
                        </div>
                        */}
                      </div>
                      {errors && errors[experience.key] && (
                        <p className='help is-danger'>{errors[experience.key].message}</p>
                      )}
                      <br />
                    </React.Fragment>
                  ))}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    当店をどうやってお知りになられましたか。
                  </label>
                  <div className='control'>
                    {noticeReasons.map((noticeReason, i) => (
                      <React.Fragment key={`notice-reason-${i}`}>
                        <input
                          {...register('notice_reason', {})}
                          type='radio'
                          value={noticeReason.value}
                          className={i !== 0 ? 'ml-4' : ''}
                        />
                        <label className='label is-inline ml-2'>
                          {noticeReason.text}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  {errors && errors.notice_reason && (
                    <p className='help is-danger'>{errors.notice_reason.message}</p>
                  )}
                </div>

                <div className='field mb-5 columns'>
                  <div className='column'>
                    <label className='label'>姓</label>
                    <div className='control'>
                      <input
                        {...register('last_name', { required: true, maxLength: 80 })}
                        type='text'
                        className='input'
                      />
                    </div>
                    {errors && errors.last_name && (
                      <p className='help is-danger'>{errors.last_name.message}</p>
                    )}
                  </div>
                  <div className='column'>
                    <label className='label'>名</label>
                    <div className='control'>
                      <input
                        {...register('first_name', { required: true, maxLength: 80 })}
                        type='text'
                        className='input'
                      />
                    </div>
                    {errors && errors.first_name && (
                      <p className='help is-danger'>{errors.first_name.message}</p>
                    )}
                  </div>
                </div>

                <div className='field mb-5 columns'>
                  <div className='column'>
                    <label className='label'>せい</label>
                    <div className='control'>
                      <input
                        {...register('last_name_hiragana', { required: true, maxLength: 80 })}
                        type='text'
                        className='input'
                      />
                    </div>
                    {errors && errors.last_name_hiragana && (
                      <p className='help is-danger'>{errors.last_name_hiragana.message}</p>
                    )}
                  </div>
                  <div className='column'>
                    <label className='label'>めい</label>
                    <div className='control'>
                      <input
                        {...register('first_name_hiragana', { required: true, maxLength: 80 })}
                        type='text'
                        className='input'
                      />
                    </div>
                    {errors && errors.first_name_hiragana && (
                      <p className='help is-danger'>{errors.first_name_hiragana.message}</p>
                    )}
                  </div>
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    郵便番号
                  </label>
                  <div className='control'>
                    <input
                      {...register('postal_code', {})}
                      type='text'
                      className='input mb-2'
                    />
                  </div>
                  <div className='is-size-7'>半角数字でハイフンなしで入力してください</div>
                  {errors && errors.postal_code && (
                    <p className='help is-danger'>{errors.postal_code.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    都道府県
                  </label>
                  <div className='control'>
                    <div className='select'>
                      <select {...register('prefecture', { required: true })}>
                        {prefectures.map(prefecture => (
                          <option
                            key={`prefecture-${prefecture.value}`}
                            value={prefecture.value}>
                            {prefecture.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {errors && errors.prefecture && (
                    <p className='help is-danger'>{errors.prefecture.message}</p>
                  )}
                </div>

                <div className='field mb-5 columns'>
                  <div className='column'>
                    <label className='label'>
                      住所
                    </label>
                    <div className='control'>
                      <input
                        {...register('address', {})}
                        type='number'
                        className='input mb-2'
                      />
                    </div>
                    {errors && errors.address && (
                      <p className='help is-danger'>{errors.address.message}</p>
                    )}
                  </div>
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    電話番号
                  </label>
                  <div className='control'>
                    <input
                      {...register('tel', {})}
                      type='text'
                      className='input mb-2'
                    />
                  </div>
                  <div className='is-size-7'>半角数字でハイフンなしで入力してください</div>
                  {errors && errors.tel && (
                    <p className='help is-danger'>{errors.tel.message}</p>
                  )}
                </div>

                <div className='field mb-5'>
                  <label className='label'>
                    メールアドレス
                  </label>
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

                <div className='control'>
                  <button
                    type='submit' className='button is-block is-primary is-fullwidth is-medium'>
                    送信
                  </button>
                </div>
              </form>
              <br />
              <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
