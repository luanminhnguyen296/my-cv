import styled from 'styled-components';
import tw from "twin.macro";

const HeadingStyle = styled.h2`
   position: relative;
   padding-bottom: 11px;
   &:before{
      display: block;
      position: absolute;
      content: '';
      width: 100%;
      background-color: #f5f5f5;
      height: 2px;
      bottom: 0;
   }
   &:after{
      display: block;
      position: absolute;
      content: '';
      width: 30px;
      height: 2px;
      bottom: 0;
      background-color: #ae1818;
      ${tw`bg-cv-700`}
   }
`

export default function Heading({ title, className = '' }: { title: string, className?: string }) {
   return (
      <HeadingStyle className={`text-md mb-10 text-xl font-semibold max-w-fit ${className}`}>
         {title}
      </HeadingStyle>
   )
}
