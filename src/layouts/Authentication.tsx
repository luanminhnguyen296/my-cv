import { Outlet } from 'react-router-dom'


// type props = {
//   children: string | JSX.Element | JSX.Element[]
// }

export default function AuthenticationLayout() {
  return (
    <>
      <main>
        <h2>AuthenticationLayout</h2>
        <Outlet />
      </main>
    </>
  )
}
