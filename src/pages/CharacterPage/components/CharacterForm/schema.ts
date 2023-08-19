import * as Yup from 'yup';

const REQUIRED_ERROR_MESSAGE = 'Required field';

export const characterFormSchema = Yup.object().shape({
  birth_year: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  eye_color: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  gender: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  hair_color: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  height: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  mass: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  name: Yup.string().required(REQUIRED_ERROR_MESSAGE),
});
