import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup'
import {yupResolver} from '@hookform/resolvers/yup/dist/yup'
import * as yup from "yup"

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">姓</label>
        <div className="control">
          <input className="input" {...register("firstName", { required: true, maxLength: 20 })} />
        </div>
        {errors && errors.firstName && (
          <p className="help is-danger">{errors.firstName.message}</p>
        )}
      </div>
      <div className="field">
        <label className="label">名</label>
        <div className="control">
          <input className="input" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        </div>
        {errors && errors.lastName && (
          <p className="help is-danger">{errors.lastName.message}</p>
        )}
      </div>
      <div className="field">
        <label className="label">年齢</label>
        <div className="control">
          <input className="input" type="number" {...register("age", { min: 18, max: 99 })} />
        </div>
        {errors && errors.age && (
          <p className="help is-danger">{errors.age.message}</p>
        )}
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">Submit</button>
      </div>
    </form>
  );
}

export default Form

// <div class="field">
//   <label class="label">Label</label>
//   <div class="control">
//     <input class="input" type="text" placeholder="Text input">
//   </div>
//   <p class="help">This is a help text</p>
// </div>
