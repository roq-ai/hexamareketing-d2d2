import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  agency_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
