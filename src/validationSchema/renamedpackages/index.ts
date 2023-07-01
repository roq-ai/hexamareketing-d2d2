import * as yup from 'yup';

export const renamedpackageValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  agency_id: yup.string().nullable(),
});
