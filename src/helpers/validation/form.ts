import { alertFormField } from '@/constants/alert-validation';
import * as Yup from 'yup';
import "yup-phone-lite";


export const validationSchema: any = {
   name: Yup.string().min(5, alertFormField.nameLengthMin)
      .max(25, alertFormField.nameLengthMax)
      .required(alertFormField.fillNotNull),
   address: Yup.string()
      .required(alertFormField.fillNotNull),
   email: Yup.string().email(alertFormField.email)
      .required(alertFormField.fillNotNull),
   phone: Yup.string()
      .phone('VN', alertFormField.phone)
      .required(alertFormField.fillNotNull),
   password: Yup.string()
      .matches(/[a-zA-Z]/, alertFormField.passwordRequireLetter)
      .matches(/[0-9]/, alertFormField.passwordRequireNumber)
      .matches(/[!@#$%^&*(),.?":{}|<>]/, alertFormField.passwordRequireSpecialCharacter)
      .min(8, alertFormField.passwordLengthMin)
      .max(20, alertFormField.passwordLengthMax)
      .required(alertFormField.fillNotNull),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], alertFormField.confirmPassword)
      .required(alertFormField.fillNotNull)
}

export const validationSchemaRegister = Yup.object().shape({
   name: validationSchema.name,
   address: validationSchema.address,
   email: validationSchema.email,
   password: validationSchema.password,
   confirmPassword: validationSchema.confirmPassword,

})

export const validationSchemaSignIn = Yup.object().shape({
   email: validationSchema.email,
   password: validationSchema.password,
})

export const validationSchemaContact = Yup.object().shape({
   email: validationSchema.email,
   phone: validationSchema.phone,
   name: validationSchema.name,
})







// import * as Yup from 'yup'


// const fillNotNull = 'You must fill in this section!'

// const validationSchema = Yup.object({
//    name: Yup.string().min(5, 'Your name must be at least 5 characters!')
//       .max(25, 'Your name must be under 25 characters!')
//       .required(fillNotNull),
//    address: Yup.string()
//       .required(fillNotNull),
//    email: Yup.string()
//       .required(fillNotNull),
//    password: Yup.string()
//       .matches(/[a-zA-Z]/, 'Password must be contain at least one letter!')
//       .matches(/[0-9]/, 'Password must be contain at least one number!')
//       .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must be contain at least one special character!')
//       .min(8, 'Your password must be at least 8 characters!')
//       .max(20, 'Your password must be under 20 characters!')
//       .required(fillNotNull),
//    confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password')], 'confirm password does not matches with password!')
//       .required(fillNotNull)
// })

// function formikRegister(onSubmitForm: (_value: any) => void) {
//    return ({
//       onSubmit: onSubmitForm,
//       validationSchema,
//       initialValues: {
//          name: '',
//          address: '',
//          email: '',
//          password: '',
//          confirmPassword: '',
//       },
//    });
// }

// export default formikRegister