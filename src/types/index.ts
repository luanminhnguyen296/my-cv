
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
   data?: TDataToastMessages | null,
   autoClose?: boolean,
   delayAutoClose?: number,
}

export interface IProject {
   createAt: number,
   thumbnail?: string,
   title: string,
   url?: string,
   description: string,
   task: string,
   tech: string[],
}

export interface IDetailsExperience {
   id: string,
   content: string,
   company: string,
   website?: string,
   achievements: string
}

export interface IExperience {
   id: string,
   createAt: number,
   major: string,
   year: string,
   content: IDetailsExperience[]
}

export interface IFetchReturn<T> {
   msg: string
   isSuccess: boolean
   data?: T
}

export interface ISkill {
   id: string,
   skill: string[],
}



export interface IIpInfo {
   ip: string,
   city: string,
   country: string,
   isProxy: boolean,
   currentTime: number,
   providerName: string,
   providerDomain: string,
   providerRoute: string,
   timeZoneName: string,
   visitCount?: number,
}

export interface IIpInfoSaveStorage {
   ip: string,
   updateAt: number,
   visitCount: number,
}

export type { IAuthState } from './redux';
export type { ISchemaContact, ISchemaLogin } from './schema';


