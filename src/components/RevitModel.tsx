import React, {useRef, useEffect} from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export default function RevitModel() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const currentRef = mountRef.current
    const {clientWidth:width, clientHeight:height} = currentRef as any

    const scene = new THREE.Scene()
    const camara = new THREE.PerspectiveCamera(25, width/height, 0.01, 1000)

    scene.add(camara)
    camara.position.x = 2
    camara.position.y =3
    camara.position.z =6


    const renderer = new THREE.WebGL1Renderer()
    renderer.setSize(width, height)

    currentRef?.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color:'white'})

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camara.lookAt(cube.position)

    const controls = new OrbitControls(camara, renderer.domElement)
    controls.enableDamping=true
    const animate = ()=>{
      renderer.render(scene, camara)

      requestAnimationFrame(animate)
    }

    animate()
    return ()=>{
      currentRef?.removeChild(renderer.domElement)
    }
  },[])


  const canvasStyle={
    width:'500px',
    height:'500px',
    backgroundColor:'transparent'
  }
  return (
    <div
    ref={mountRef}
    style={canvasStyle}>RevitModel</div>
  )
}
