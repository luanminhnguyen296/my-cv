export interface ISchemaContact {
   email: string
   phone: string
   name: string
   message?: string
   userAgent: string
   createAt: number
}

export interface ISchemaLogin { email: string, password: string }