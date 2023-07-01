import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string(),
  user_id: yup.string().nullable(),
});
