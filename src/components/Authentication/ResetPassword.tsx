import { validationSchema } from '@/helpers/validation/form'
import { FastField, Formik } from 'formik'
import { Form } from 'react-router-dom'
import * as Yup from 'yup'
import InputField from '../UI/Forms/InputField'
import CVButton from '../UI/Button'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/config/firebase'
import ToastCV from '../UI/ToastCV'
import { useState } from 'react'
import { TDataToastMessages } from '@/types'

interface IProps {
   handleGoBack: (value: boolean) => void,
}

export default function ResetPassword({ handleGoBack }: IProps) {

   const [alert, setAlert] = useState<TDataToastMessages | null>(null)
   const initialValues = {
      email: ''
   }

   const handleResetPassword = (values: any) => {
      sendPasswordResetEmail(auth, values.email)
         .then(() => {
            setAlert({
               msg: 'We have sent you an email, please check your inbox!',
               status: 'success'
            })
         })
      console.log("🚀 ~ handleResetPassword ~ values:", values)
   }

   return (
      <>
         <ToastCV data={alert} />

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
                        <div className='flex mt-10 gap-2'>
                           <CVButton type='submit' cvType='bg-cv'>Send reset</CVButton>
                           <CVButton cvType='bg-default' onClick={() => handleGoBack(false)}>Login</CVButton>
                        </div>
                     </Form>
                  )
               }
            }
         </Formik>
      </>
   )
}
