import { auth } from '@/config/firebase';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
   const navigate = useNavigate()
   function handleSignOut() {
      auth.signOut();
      navigate('/')
   }
   return (
      <div>
         <Helmet>
            <title>Dashboard</title>
         </Helmet>
         <h2>This Dashboard</h2>
         <button onClick={handleSignOut}>Sign Out</button>
         <Link to='/'>home</Link>
      </div>
   )
}

export default Dashboard
