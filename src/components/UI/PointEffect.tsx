import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

export default function PointEffect() {
   const [cursor, setCursor] = useState({ x: 0, y: 0 })

   const PointEffectStyle = styled.div<{ cursor: { x: number, y: number } }>`
      transition-duration: .3s;
      position: absolute;
      inset: 0;
      background: radial-gradient(540px at ${({ cursor }) => `${cursor.x}px ${cursor.y}px`},rgb(255 255 255 / ${(!cursor.x && !cursor.y) ? 0 : 6}%),transparent 70%);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      z-index: 30;
  `

   function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
      setCursor({ x: event.pageX, y: event.pageY })
   }

   return (
      <PointEffectStyle onMouseMove={handleMouseMove} cursor={cursor} />
   )
}

