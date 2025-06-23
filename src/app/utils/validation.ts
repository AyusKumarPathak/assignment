import * as Yup from 'yup';

export const artistSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  category: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one category'),
  languages: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one language'),
  feeMin: Yup.number()
    .min(0, 'Minimum fee must be at least 0')
    .required('Minimum fee is required'),
  feeMax: Yup.number()
    .min(Yup.ref('feeMin'), 'Maximum fee must be greater than or equal to minimum fee')
    .required('Maximum fee is required'),
  location: Yup.string().required('Location is required'),
});
