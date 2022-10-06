import ReactDOM from 'react-dom'
// import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'
import Hello from './hello'
import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, useCursor } from '@react-three/drei'
import { Model, Fragments } from './Text'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      {/* <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a> */}
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        My pets
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/17/2021</div>
    </div>
  )
}

// function Scene() {
//   const vec = new THREE.Vector3()
//   const [clicked, setClicked] = useState(false)
//   const [hovered, setHovered] = useState(false)
//   useCursor(hovered)
//   useFrame((state) => {
//     state.camera.position.lerp(vec.set(clicked ? -10 : 0, clicked ? 10 : 0, 20), 0.1)
//     state.camera.lookAt(0, 0, 0)
//   })
//   setTimeout(function(){
//     setClicked(true)
//   },2000);
//   return (
//     <group>
//       <Fragments visible={clicked} />
//       <Model visible={!clicked} onClick={() => setClicked(true)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
//     </group>
//   )
// }

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      {/* <Canvas dpr={[1, 2]} orthographic camera={{ zoom: 250 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Scene />
          <Preload all />
        </Suspense>
      </Canvas> */}
      <App />
    </Suspense>
    <Overlay />
    {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
  </>,
  document.getElementById('root')
)
