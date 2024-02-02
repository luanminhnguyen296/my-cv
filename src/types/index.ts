export interface TDetailWork {
   content: string
   company: string
   website?: string
   achievements: string
}
export interface IWorkExperience {
   year: string;
   major: string;
   content: TDetailWork | TDetailWork[];
}
export interface ICertificate {
   school: string;
   year: string;
   major: string;
   content: string;
   icon: any;
}
export interface IEducation {
   school: string;
   year: string;
   major: string;
   content: string;
}

export type TFormContact = {
   email: string,
   phone: string,
   name: string,
   message?: string
}


export type TDataToastMessages = {
   status: 'success' | 'error',
   msg: string
}

export interface TToastProps {
   data?: TDataToastMessages,
   delayAutoClose?: number,
   onCloseToast: (values: any) => void
}
