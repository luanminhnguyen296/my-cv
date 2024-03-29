import { Label, TextInput, Textarea } from 'flowbite-react';
import { ErrorMessage } from 'formik';
import { FC, HTMLAttributes } from 'react';


interface IProps extends HTMLAttributes<HTMLInputElement> {
   field?: any,
   form?: any,
   name: string,
   type: string,
   label: string,
   height: number
   placeholder: string,
   disabled: boolean,
   className: string,
   autocomplete?: boolean,
   icon?: FC<{ className: string }>
}

const InputField = (props: IProps) => {
   const {
      field,
      className = '',
      height = 36,
      icon: Icon,
      autocomplete = true,
      label = '', placeholder, type = 'text', disabled = false
   } = props;

   const { name } = field


   return (
      <div className={`flex flex-col ${className}`}>
         {
            label && <div className='flex items-center mb-2'>
               {
                  Icon && <Icon className='text-cv-600 mr-2' />
               }
               <Label className='inline-block' htmlFor={name} value={label} />
            </div>
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
                  autoComplete={autocomplete.toString()}
                  style={{ height }}
                  disabled={disabled}
                  placeholder={placeholder}
                  type={type}
                  id={name}
                  {...field}
               />
         }
         <ErrorMessage name={name}>
            {msg => <p className='text-rose-700 italic text-xs mt-1 dark:text-rose-500'>*{msg}</p>}
         </ErrorMessage>
      </div>

   )
};
export default InputField