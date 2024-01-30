import { validationSchema } from '@/helpers/validation/form'
import { FastField, Formik } from 'formik'
import { Form } from 'react-router-dom'
import * as Yup from 'yup'
import InputField from '../Forms/InputField'
import CVButton from '../UI/Button'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/services/firebase'

interface IProps {
   handleGoBack: (value: boolean) => void,
   handleAlert: ({ status, msg }: { status: 'success' | 'error', msg: string }) => void,
   onShowToast: (value: boolean) => void
}

export default function ResetPassword({ handleGoBack, handleAlert, onShowToast }: IProps) {
   const initialValues = {
      email: ''
   }

   const handleResetPassword = (values: any) => {
      sendPasswordResetEmail(auth, values.email)
         .then(() => {
            handleAlert({
               msg: 'We have sent you an email, please check your inbox!',
               status: 'success'
            })
            onShowToast(true)
         })
      console.log("🚀 ~ handleResetPassword ~ values:", values)
   }


   return (
      <Formik
         initialValues={initialValues}
         validationSchema={Yup.object().shape({
            email: validationSchema.email
         })}
         onSubmit={handleResetPassword} >
         {
            ({ handleSubmit }) => {
               return (
                  <Form onSubmit={handleSubmit}>
                     <FastField name='email' type="email" label="Email" component={InputField} />
                     <div className='flex mt-5 gap-2'>
                        <CVButton type='submit' cvType='bg-color'>Send reset</CVButton>
                        <CVButton cvType='bg-default' onClick={() => handleGoBack(false)}>Login</CVButton>
                     </div>
                  </Form>
               )
            }
         }
      </Formik>
   )
}
