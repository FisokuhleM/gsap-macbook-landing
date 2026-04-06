import React from 'react'
import useMacbookStore from '../store'
import clsx from 'clsx'
import {COLORS, SIZES} from '../constants'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import MacbookModel14 from './models/Macbook-14'


const ProductViewer = () => {
  const {color, scale, setColor, setScale} = useMacbookStore()
  const colorLabel = COLORS.find(c => c.color === color).label
  const scaleLabel = SIZES.find(s => s.value === scale).label
  return (
    <section id="product-viewer">
        <h2>Take a closer look</h2>
        <div className='controls'>
          <p className="info">Macbook Pro {scaleLabel} in {colorLabel}</p>
          <div className='flex-center gap-5 mt-5'>
            <div className='color-control'>
                <div 
                    onClick={()=> setColor('#adb5bd')} 
                    className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}/>
                <div 
                    onClick={()=> setColor('#2e2c2e')} 
                    className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}/>
            </div>
            <div className='size-control'>
                <div 
                    onClick={()=> setScale(0.06)}
                    className={clsx(scale === 0.06 ? 'bg-white text-black': 'bg-transparent text-white')}
                >
                  <p>14"</p>
                </div>
                <div 
                    onClick={()=> setScale(0.08)}
                    className={clsx(scale === 0.08 ? 'bg-white text-black': 'bg-transparent text-white')}
                >
                  <p>16"</p>
                </div>
            </div>
          </div>
        </div>
        <Canvas id='canvas' camera={{position:[0,2,5], fov: 50, near:0.1, far:100}}>
            {/*X,Y,Z ---> X-> horizontal, Y-> vertical, Z-> depth(How far)*/}
            {/*<Box position={[0,0.7,0]} scale={10 * scale} material-color={color}/>*/}
            <ambientLight intensity={0.5}/>
            <MacbookModel14 scale={0.06} position={[0, 0, 0]}/>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer