import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import ModelRevit from "../assets/gltfModel/test1.gltf";

export default function RevitModel(ModelTest: any) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef as any;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#efefef");
    const camara = new THREE.PerspectiveCamera(25, width / height, 0.01, 10000);

    scene.add(camara);
    camara.position.x = 1;
    camara.position.y =5;
    camara.position.z = 25;
    // camara.lookAt(0, 1000000, 0);
0
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(width, height);

    currentRef?.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: "green" });

    // // Grid
    // const gridHelper = new THREE.GridHelper(40, 40, "#858585");
    // scene.add(gridHelper);
    // // Line Grid Axis X
    // // Line Color
    // const LineMaterialAxisX = new THREE.LineBasicMaterial({ color: 0x0000ff });
    // // Line Vector points
    // const pointsAxisX = [];
    // pointsAxisX.push(new THREE.Vector3(-100, 0, 0));
    // pointsAxisX.push(new THREE.Vector3(100, 0, 0));
    // // set line
    // const geometryLine = new THREE.BufferGeometry().setFromPoints(pointsAxisX);
    // // create line
    // const lineAxisX = new THREE.Line(geometryLine, LineMaterialAxisX);
    // scene.add(lineAxisX);

    // // Line Grid Axis Y
    // // Line Color
    // const LineMaterialAxisY = new THREE.LineBasicMaterial({ color: 0x00ffff });
    // // Line Vector points
    // const pointsAxisY = [];
    // pointsAxisY.push(new THREE.Vector3(0, -100, 0));
    // pointsAxisY.push(new THREE.Vector3(0, 100, 0));
    // // set line
    // const geometryLineY = new THREE.BufferGeometry().setFromPoints(pointsAxisY);
    // // create line
    // const lineAxisY = new THREE.Line(geometryLineY, LineMaterialAxisY);
    // scene.add(lineAxisY);
    // // Line Grid Axis Z
    // // Line Color
    // const LineMaterialAxisZ = new THREE.LineBasicMaterial({ color: 0xf560ff });
    // // Line Vector points
    // const pointsAxisZ = [];
    // pointsAxisZ.push(new THREE.Vector3(0, 0, -100));
    // pointsAxisZ.push(new THREE.Vector3(0, 0, 100));
    // // set line
    // const geometryLineZ = new THREE.BufferGeometry().setFromPoints(pointsAxisZ);
    // // create line
    // const lineAxisZ = new THREE.Line(geometryLineZ, LineMaterialAxisZ);
    // scene.add(lineAxisZ);
    // Cubo
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camara.lookAt(cube.position);

    // Modelo 3D

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "./glbModel/IqeaModel.glb",
      (gltf) => {
        gltf.scene.scale.set(0.5, 0.5, 0.5);

        gltf.scene.rotation.x = -Math.PI / 2;
        gltf.scene.position.set(108, 0, -41);
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
        camara.lookAt(gltf.scene.position);
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log(xhr.loaded / xhr.total, "% loaded");
      },
      (error) => {
        console.log("An error happened => ", error);
      }
    );

    // Ilumuminacion
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // soft white light
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 50, 0);
    pointLight1.position.set(0, 6, 6);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 50, 0);
    pointLight2.position.set(0, 6, 8);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 50, 0);
    pointLight3.position.set(6, 6, -8);
    scene.add(pointLight3);


    const controls = new OrbitControls(camara, renderer.domElement);
    controls.enableDamping = true;

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTIme = clock.getElapsedTime();
      // cube.rotation.x = elapsedTIme;
      // cube.rotation.y = elapsedTIme;
      // cube.rotation.z = elapsedTIme;
      // cube.position.y = Math.sin(elapsedTIme*.7);
      // cube.position.x = Math.sin(elapsedTIme*.7);

      controls.update();
      renderer.render(scene, camara);

      requestAnimationFrame(animate);
    };
    const resize = () => {
      const updateWidth = currentRef?.clientWidth;
      const updateHeight = currentRef?.clientHeight;

      renderer.setSize(updateWidth as number, updateHeight as number);
      camara.aspect = (updateWidth as number) / (updateHeight as number);
      camara.updateProjectionMatrix();
    };

    window.addEventListener("resize", resize);

    animate();
    return () => {
      currentRef?.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const canvasStyle = {
    width: "100%",
    height: "400px",
  };
  return (
    <div ref={mountRef} style={canvasStyle}>
      <h3>

      Revit MEP Model...
      </h3>
    </div>
  );
}
