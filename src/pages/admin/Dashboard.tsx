import { auth } from '@/services/firebase'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
   const navigate = useNavigate()
   function handleSignOut() {
      auth.signOut();
      navigate('/')
   }
   return (
      <div>
         <h2>This Dashboard</h2>
         <button onClick={handleSignOut}>Sign Out</button>
         <Link to='/'>home</Link>
      </div>
   )
}

export default Dashboard
