import { IFetchReturn } from '@/types'
import { orderBy } from 'lodash'
import { useEffect, useState } from 'react'

function useFetch<T>(callBack: () => Promise<IFetchReturn<T[] | null>>) {

   const [loading, setLoading] = useState(false)
   const [response, setResponse] = useState<T[] | null>(null)
   const [error, setError] = useState<any>(null)

   useEffect(() => {
      (async () => {

         setLoading(true)
         const res = await callBack()
         if (res.isSuccess) {
            setResponse(res?.data ? orderBy(res.data, ['createAt'], ['desc']) : [])
         } else {
            setError({
               status: 'error',
               msg: res.msg
            })
         }

         setLoading(false)
      })()
   }, [])

   return ({ loading, response, error })
}

export default useFetch