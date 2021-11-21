import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
// import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface IFormInput {
  my_checkbox: string[];
  patch: string;
  generation: string;
  gender: string;
  allergy: string;
  rash: string;
  sting: string;
  dye_where: string;
  dye_when: number;
  hena_when: number;
  rebonded_when: number;
  manicure_when: number;
  perm_when: number;
  treatment_when: number;
  notice_reason: string;
  last_name: string;
  first_name: string;
  last_name_hiragana: string;
  first_name_hiragana: string;
  postal_code: number;
  prefecture: number;
  address: string;
  tel: string;
  email: string;
}

export const experiences = [
  {
    label: 'ヘナ',
    key: 'hena_when',
    keyUnit: 'hena_when_unit',
  },
  {
    label: '縮毛矯正',
    key: 'rebond_when',
    keyUnit: 'rebond_when_unit',
  },
  {
    label: 'ヘアマニキュア',
    key: 'manicure_when',
    keyUnit: 'manicure_when_unit',
  },
  {
    label: 'デジタルパーマ',
    key: 'perm_when',
    keyUnit: 'perm_when_unit',
  },
  {
    label: 'トリートメント',
    key: 'treatment_when',
    keyUnit: 'treatment_when_unit',
  },
]

export const noticeReasons = [
  {
    value: "1",
    text: '店を直接見つけて',
  },
  {
    value: "2",
    text: '口コミ',
  },
  {
    value: "3",
    text: 'テレビ',
  },
  {
    value: "99",
    text: 'その他',
  },
]

export const whenOptions = [
  {
    value: 0,
    text: 'なし',
  },
  {
    value: 1,
    text: '3日以内',
  },
  {
    value: 2,
    text: '1週間以内',
  },
  {
    value: 3,
    text: '1ヶ月以内',
  },
  {
    value: 4,
    text: '3ヶ月以内',
  },
  {
    value: 5,
    text: '半年以内',
  },
  {
    value: 6,
    text: '1年以内',
  },
]

const schema = yup.object({
  patch: yup.number().required().nullable(),
  generation: yup.number().positive().integer().required().nullable(),
  gender: yup.number().positive().integer().required().nullable(),
  allergy: yup.number().integer().required().nullable(),
  rash: yup.number().integer().required().nullable(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  first_name_hiragana: yup.string().required(),
  last_name_hiragana: yup.string().required(),
}).required()

const initialValues = {
  patch: "1",
  generation: "1",
  gender: "1",
  allergy: "0",
  rash: "0",
  sting: "0",
  dye_when: 0,
  dye_where: "0",
  hena_when: 0,
  rebonded_when: 0,
  manicure_when: 0,
  perm_when: 0,
  treatment_when: 0,
}

const useChartForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  })
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  console.log(errors)

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useChartForm
