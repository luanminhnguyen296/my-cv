import InputField from "@/components/Forms/InputField";
import CVButton from "@/components/UI/Button";
import Heading from '@/components/UI/Dropdown/Heading';
import ToastCV from "@/components/UI/ToastCV";
import { validationSchemaContact } from "@/helpers/validation/form";
import { TReturnAddContact, addContact } from "@/services/contact-form";
import { TFormContact, TToastProps } from "@/types";
import { FastField, Form, Formik } from "formik";
import { FC, useState } from "react";
import { Github, Mailbox, Phone, PinMap } from "react-bootstrap-icons";


type TContact = { icon: FC, title: string }

const contacts: TContact[] = [
   {
      icon: Phone,
      title: '+84 902 555 919'
   },
   {
      icon: Mailbox,
      title: 'luanminhnguyen296@gmail.com'
   },
   {
      icon: PinMap,
      title: 'Le Quang Dinh street, Binh Thanh District, HCM City'
   },
   {
      icon: Github,
      title: 'github.com/luanminhnguyen296'
   }
]

export default function Contact() {
   const [toast, setToast] = useState<any>();
   const formContact: TFormContact = {
      email: '',
      phone: '',
      name: '',
      message: ''
   }

   async function handleSubmit(values: TFormContact) {

      const result: TReturnAddContact = await addContact(values)
      if (result.isSuccess) {
         alert('success')
         setToast({
            status: 'success',
            msg: 'ok'
         })
      } else alert('error')

      console.log("🚀 ~ handleSubmit ~ TFormContact:", values)
   }
   return (
      <div id='contact' className='flex w-full flex-col lg:flex-row gap-8 mb-10 mt-10'>

         {
            toast && <ToastCV data={toast} onCloseToast={setToast} />
         }

         <div className="flex flex-col basis-1/3">
            <Heading title="My contact" className="mb-11" />
            <div className="flex flex-col gap-3 md:gap-8">
               {
                  contacts.map((i: TContact, id: number) => (
                     <div className="flex items-center" key={id}>
                        <span className="text-xl dark:text-gray-400 text-gray-600 pr-5 ">
                           <i.icon />
                        </span>
                        <span className="font-semibold dark:text-gray-400 text-sm text-gray-600">
                           {i.title}
                        </span>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="flex flex-col flex-1">
            <Heading title="Send messages for me" className="mb-8" />
            <Formik initialValues={formContact} validationSchema={validationSchemaContact} validateOnBlur={true} onSubmit={handleSubmit}>
               {
                  ({ resetForm, isSubmitting }) => (
                     <Form className='flex w-full'>
                        <div className="flex gap-5 flex-1 flex-col lg:flex-row ">
                           <div className="flex basis-2/5 flex-col gap-y-2">
                              <FastField className='mb-0' height={40} name="name" label="Name" placeholder="Your name..." component={InputField} />
                              <FastField className='mb-0' height={40} name="email" label="Email" placeholder="Your email..." component={InputField} />
                              <FastField className='mb-0' height={40} name="phone" label="Phone" placeholder="Your phone..." component={InputField} />
                           </div>
                           <div className="flex flex-col grow justify-between">
                              <FastField className='w-full h-full self-stretch ' type='textarea' name="message" label="Messages" placeholder="Messages..." component={InputField} />
                              <div className="w-full flex mt-2">
                                 <CVButton type='submit' cvType='bg-color' disabled={isSubmitting}>Send message</CVButton>
                                 <CVButton cvType='bg-default' className="ml-3" type='reset' onClick={() => resetForm()}>Reset</CVButton>
                              </div>
                           </div>
                        </div>

                     </Form>
                  )
               }
            </Formik>
         </div>
      </div>
   )
}
