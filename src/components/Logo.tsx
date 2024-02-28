import styled from 'styled-components'

const LogoStyled = styled.svg`
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
    animation: dash 4s ease-in-out alternate infinite ;
    animation-delay: 0;
    @keyframes dash {
    from {
      stroke-dashoffset: 1450;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default function Logo() {
  return (
    <div className='w-16 h-16 rounded-lg mr-3 bg-gray-100 p-3 dark:bg-gray-700'>
      <LogoStyled className="path" viewBox="0 0 289.3 333.9" >
        <path fill="none" className='stroke-cv-800 dark:stroke-cv-500' strokeLinecap="round" strokeLinejoin="round" strokeWidth="14" d="M120.5,34.5C61.3,58,8.4,109,40.1,127.5C87,154.7,248.6,70.3,224.5,29.6C203.4-6.2,87.9,59.1,111.7,224.8
      c17.6,122.5-21.5,95-25.9,57.6c-3.6-30.2,0.2-47.9,4.4-63.3c8.9-32,36.6-54.2,40.4-21.1c4.9,43,6.1,53.1,6.1,53.1
      s-9.3-77.5,10.1-78.4c14-0.7,5.9,49.7,15.6,52.6c15.8,3.9,12.1-66.9,105.7-52.4"/>
      </LogoStyled>
    </div>
  )
}
