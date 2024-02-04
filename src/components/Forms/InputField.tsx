import { Label, TextInput, Textarea } from 'flowbite-react';
import { ErrorMessage } from 'formik';
import { HTMLAttributes } from 'react';


interface IProps extends HTMLAttributes<HTMLInputElement> {
   field?: any,
   form?: any,
   name: string,
   type: string,
   label: string,
   height: number
   placeholder: string,
   disabled: boolean,
}

const InputField = (props: IProps) => {
   const {
      field,
      className = '',
      height = 32,
      label = '', placeholder, type = 'text', disabled = false
   } = props;

   const { name } = field


   return (
      <div className={`flex flex-col ${className}`}>
         {
            label && <div> <Label className='mb-2 inline-block' htmlFor={name} value={label} /> </div>
         }

         {
            type === 'textarea' ? <Textarea sizing="sm"
               disabled={disabled}
               placeholder={placeholder}
               id={name}
               className='h-full'
               {...field}
            />
               :
               <TextInput sizing="sm"
                  style={{ height }}
                  disabled={disabled}
                  placeholder={placeholder}
                  type={type}
                  id={name}
                  {...field}
               />
         }
         <ErrorMessage name={name}>
            {msg => <p className='text-rose-700 italic text-xs mt-1'>*{msg}</p>}
         </ErrorMessage>
      </div>

   )
};
export default InputField