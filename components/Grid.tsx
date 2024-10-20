import React from 'react'
import { BentoGrid,BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{title:'Title',}]}
        </BentoGrid>
    </section>
  )
}

export default Grid