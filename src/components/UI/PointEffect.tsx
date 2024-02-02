import { useEffect, useState } from 'react';
import styled from 'styled-components';


interface MouseEventMove extends MouseEventInit {
   pageX: number, pageY: number
}

export default function PointEffect() {
   const [cursor, setCursor] = useState({ x: 0, y: 0 })

   const PointEffectStyle = styled.div<{ cursor: { x: number, y: number } }>`
      transition-duration: .3s;
      position: absolute;
      inset: 0;
      background: radial-gradient(540px at ${({ cursor }) => `${cursor.x}px ${cursor.y}px`},rgb(255 255 255 / ${(!cursor.x && !cursor.y) ? 0 : 6}%),transparent 70%);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      z-index: 1;
      pointer-events: none;
  `

   function handleMouseMove(event: MouseEventMove) {
      console.log("🚀 ~ handleMouseMove ~ event:", event)

      setCursor({ x: event.pageX, y: event.pageY })
   }

   function addEventMouseMove() {
      document.body.addEventListener('mousemove', handleMouseMove)
   }

   useEffect(() => {
      const widthView = window?.visualViewport?.width || 0
      if (widthView > 1280) {
         addEventMouseMove();
         return () => {
            document.body.removeEventListener('mousemove', handleMouseMove)
         }
      }

   })

   return (
      <PointEffectStyle cursor={cursor} />
   )
}

