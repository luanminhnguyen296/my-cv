import { Facebook, Github, Linkedin } from 'react-bootstrap-icons'
export default function Footer() {
  const socials = [
    {
      title: 'Facebook',
      url: import.meta.env.VITE_FACEBOOK,
      Icon: <Facebook className='text-xl' />,
    },
    {
      title: 'LinkedIn',
      url: import.meta.env.VITE_LINKED_IN,
      Icon: <Linkedin className='text-xl' />,
    },
    {
      title: 'Github',
      url: import.meta.env.VITE_GITHUB,
      Icon: <Github className='text-xl' />,
    },
  ]
  return (
    <footer className='pb-4'>
      <div className='flex border-t border-gray-400 justify-between text-[.8rem] items-center py-4 px-12'>
        <ul className='flex gap-4'>
          {
            socials.map((i, id) => <li className="flex" key={id}>
              <a href={i.url} className='cursor-pointer font-medium' target='_blank' title={i.title}>
                {i.Icon}
              </a>
            </li>)
          }
        </ul>
        <div className='text-gray-400'>Nguyen Minh Luan</div>
      </div>
    </footer>
  )
}
