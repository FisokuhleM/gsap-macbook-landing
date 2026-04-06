import { Lightformer, Environment } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer
                    form='rect'
                    intensity={10}
                    position={[-10, 5, -5]}
                    scale={10}
                    rotation-y={Math.PI/2}
                />
            </group>
        </Environment>
        <spotLight
            position={[0, -25, 10]}
            angle={0.15}
            decay={0} // decay -> This is the light falloff
            intensity={Math.PI * 0.2}
        />
        <spotLight
            position={[0, 15, 5]}
            angle={0.15}
            decay={0.1} // decay -> This is the light falloff
            intensity={Math.PI * 1}
        />
    </group>
  )
}

export default StudioLights