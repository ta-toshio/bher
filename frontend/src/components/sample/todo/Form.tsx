import React from "react"
import useMyForm from './useForm'

const Form: React.FC = () => {

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useMyForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">text</label>
        <div className="control">
          <input className="input" {...register("text", { required: true })} />
        </div>
        {errors && errors.text && (
          <p className="help is-danger">{errors.text.message}</p>
        )}
      </div>
      <div className="field">
        <label className="label">status</label>
        <div className="control">
          <div className="select">
            <select {...register("status", { required: true })}>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
        </div>
        {errors && errors.status && (
          <p className="help is-danger">{errors.status.message}</p>
        )}
      </div>
      <div className="field">
        <label className="label">priority</label>
        <div className="control">
          <input className="input" type="number" {...register("priority", { min: 0, max: 99 })} />
        </div>
        {errors && errors.priority && (
          <p className="help is-danger">{errors.priority.message}</p>
        )}
      </div>
      <div className="field">
        <label className="label">parentID</label>
        <div className="control">
          <input className="input" type="number" {...register("parentID" )} />
        </div>
        {errors && errors.parentID && (
          <p className="help is-danger">{errors.parentID.message}</p>
        )}
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">Submit</button>
      </div>
    </form>
  )
}

export default Form
