"use client"

import Image from 'next/image'
import { CustomButton } from '.'

const hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Repara y manten tus instrumentos de medicina al dia 
                - ¡Rapido y facilmente!
            </h1>
            <p className='hero__subtitle'>
                Solicita mantenimiento y reparacion de todos tus equipos medicos 
                a los mejores precios del mercado
            </p>
            <CustomButton 
                title = "Buscar equipos"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero" fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default hero