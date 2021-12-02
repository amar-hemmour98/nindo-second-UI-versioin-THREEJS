// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import { BufferAttribute, Color } from 'three'

// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// // Objects
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// // to test add smallTorus in torus with reverse animation .
// const smallTorusGeo = new THREE.TorusGeometry( .35, .1, 8, 50);


// //test
// const particlesGeometry2 = new THREE.BufferGeometry;
// const particlesGeometry = new THREE.BufferGeometry;
// const particlesCnt2 = 3000 ; 

// // test
// const particlesCnt = 2000 ;
// const posArray2 = new Float32Array(particlesCnt2 * 3);
// for ( let i=0;i<particlesCnt * 3 ; i++){
//     posArray2[i] = (Math.random() - 0.5) * 5 ;
// }
// particlesGeometry2.setAttribute('position',new BufferAttribute(posArray2, 3));

// const posArray = new Float32Array(particlesCnt * 3);
// for ( let i=0;i<particlesCnt * 3 ; i++){
//     posArray[i] = (Math.random() - 0.5) * 5 ;
// }
// particlesGeometry.setAttribute('position',new BufferAttribute(posArray, 3));

// // test


// const material2 = new THREE.PointsMaterial({
//     size: 0.005,
//     color:'#B026FF'
// })

// // Materials

// // const material = new THREE.PointsMaterial({
// //     size: 0.005,
// //     color:'#25fde9'
// // })
// const material = new THREE.PointsMaterial({
//     size: 0.005,
//     color:'#25fde9'
// })

// // Mesh
// const sphere = new THREE.Points(geometry,material)
// const particlesMesh = new THREE.Points(particlesGeometry,material)
// // test
// const particlesMesh2 = new THREE.Points(particlesGeometry2,material2)
// const smallTorus = new THREE.Points(smallTorusGeo,material)

// scene.add(particlesMesh);
// scene.add(particlesMesh2);

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(sphere,pointLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }



// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.setClearColor(new THREE.Color('#21282a'),1);
// // midnight purple renderer.setClearColor(new THREE.Color('#280137'),1);

// // red particles +  turquoise stars = picking


// // mouse events 
// let mouseX = 0 
// let mouseY = 0 

// document.addEventListener('mousemove', e => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });


// /**
//  * Animate
//  */

// const clock = new THREE.Clock()

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = -.5 * elapsedTime
//     sphere.rotation.x = .7* elapsedTime

//     particlesMesh.rotation.y = .5* elapsedTime
//     particlesMesh.rotation.x = -.7* elapsedTime
//     // test
//     particlesMesh2.rotation.y = -.2* elapsedTime
//     particlesMesh2.rotation.x = .35* elapsedTime
    
    
//     if(mouseX > 0){
//         // !!!!multiplier par mouseX et mouseY pour avoir 
//         // des changement qui 
//         // s'accordent avec le mouvement de la souris a chaque frame 
//         particlesMesh.rotation.x= -.5 * (elapsedTime *.5)
//         particlesMesh.rotation.y= .7* (elapsedTime *.5)
    
//         // test
//         particlesMesh2.rotation.x= .5 * (elapsedTime *.05)
//         particlesMesh2.rotation.y= -.7* (elapsedTime *.05)
        
//         // particlesMesh.rotation.y = (Math.floor(Math.random() * 80)); 
//     }

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
//     // mouseX = 0
//     // mouseY = 0
// }

// tick()