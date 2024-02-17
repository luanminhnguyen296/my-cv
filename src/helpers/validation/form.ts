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
