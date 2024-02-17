import { selectAuth, setLoading, setState } from '@/features/authentication/authenSlice'
import { auth } from '@/services/firebase'
import { Unsubscribe } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function
  useAuth() {

  const { token, loading } = useSelector(selectAuth)
  const reduxDispatch = useDispatch()

  useEffect(() => {
    let unsubscribe: Unsubscribe = () => { };

    if (token === undefined) {
      reduxDispatch(setLoading(true))
      unsubscribe = onAuthStateChanged(auth, async (user) => {
        const jwt = await user?.getIdToken()
        reduxDispatch(setState({ token: jwt || null, loading: false }))
      })
    }

    return () => {
      unsubscribe()
    }
  }, [])

  return { token, loading }
}
