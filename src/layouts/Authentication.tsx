import bg from '@/assets/bg-line.svg?url';
import CheckLogged from '@/components/Authentication/CheckLogged';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';


const MainStyles = styled('div')
  .withConfig({ shouldForwardProp: (props) => props !== 'bgImage' })
  .attrs<{ bgImage: string }>({})`
   ${tw`min-h-screen dark:bg-dark-mode dark:text-content w-full flex flex-col justify-between pt-5 relative`}
      background-image:  url(${({ bgImage }) => bgImage});
      background-position: auto;
      background-size: 100% 100%;
      background-repeat: no-repeat;`

export default function AuthenticationLayout() {
  return (
    <CheckLogged isAdmin={false}>
      <MainStyles bgImage={bg}>
        <Outlet />
      </MainStyles>
    </CheckLogged>
  )
}