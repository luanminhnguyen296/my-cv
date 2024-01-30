import { Dropdown as DropDownFlowbite } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Dropdown() {
   return (
      <>
         <DropDownFlowbite label="" dismissOnClick={false} renderTrigger={() => <Link to="">Account</Link>}>
            <DropDownFlowbite.Item><Link to={'register'}>Register</Link></DropDownFlowbite.Item>
            <DropDownFlowbite.Item><Link to={'login'}>Login</Link></DropDownFlowbite.Item>
         </DropDownFlowbite>
      </>
   )
}
