//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
const raycaster = new THREE.Raycaster();
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;


//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'robot';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    object.position.set(0,0,0);
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "dino" ? 25 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
}

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement
  
  if (object && objToRender === "robot") {
    //I've played with the constants here until it looked good 
    const targetRotationY = -2.45 + (mouseX / window.innerWidth);
    const targetRotationX = 0 + (mouseY / window.innerHeight);

    // Clamp rotation values to limit to 90 degrees
    object.rotation.y = Math.max(Math.min(targetRotationY, 3), -3); // 1.5708 radians is approximately 90 degrees
    object.rotation.x = Math.max(Math.min(targetRotationX, 3), -3); // 1.5708 radians is approximately 90 degrees
  }
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//add mouse position listener
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}
let lastClickTime = 0;
const clickDelay = 1000; // in milliseconds
// Add event listener for mouse click inside the canvas
// renderer.domElement.addEventListener("click", (event) => {
//   // Check if the click coordinates are inside the canvas
//   const canvasBounds = renderer.domElement.getBoundingClientRect();
//   const mouseX = event.clientX - canvasBounds.left;
//   const mouseY = event.clientY - canvasBounds.top;

//   // Check if the click is within the canvas boundaries
//   if (
//     mouseX >= 0 &&
//     mouseX <= canvasBounds.width &&
//     mouseY >= 0 &&
//     mouseY <= canvasBounds.height
//   ) {
//     jump(); // Trigger the jump function only if clicking inside the canvas
//   }
// });
// Function to hide the object
//HIDE
// Function to hide the object
function hideObject() {
  if (object) {
    object.visible = false;
  }
}

// Function to show the object
function showObject() {
  if (object) {
    object.visible = true;
  }
}

// Function to determine if the object should be visible on the current page
function shouldShowObjectOnCurrentPage() {
  // Replace 'page1.html' and 'page2.html' with the actual URLs or identifiers of the pages where you want the object to be visible
  const currentPage = window.location.pathname;

  // Return true if the object should be visible on this page, false otherwise
  return currentPage.includes('page1.html') || currentPage.includes('page2.html');
}

// Check if the object should be visible on the current page and update its visibility
function updateObjectVisibility() {
  if (shouldShowObjectOnCurrentPage()) {
    showObject();
  } else {
    hideObject();
  }
}

// Call the function initially to set the visibility based on the current page
updateObjectVisibility();

// Add a listener for changes in the page (assuming you're not using a framework with its own routing system)
window.addEventListener("popstate", updateObjectVisibility);

//HIDE
function jump() {
  const currentTime = performance.now();

  // Check if enough time has passed since the last click
  if (currentTime - lastClickTime < clickDelay) {
    return;
  }

  // Update the last click time
  lastClickTime = currentTime;

  const initialPosition = object.position.y;
  const jumpHeight = 20;
  const jumpDuration = 400; // in milliseconds
  const jumpStart = performance.now();

  // Define the jump animation function
  function animateJump(time) {
    const elapsed = time - jumpStart;
    const progress = Math.min(1, elapsed / jumpDuration);

    // Move the object up with a smooth easing function
    object.position.y = initialPosition + jumpHeight * Math.sin(progress * Math.PI);

    // Continue the animation if not complete
    if (progress < 1) {
      requestAnimationFrame(animateJump);
    }
  }

  // Start the jump animation
  requestAnimationFrame(animateJump);
}

// Add event listener for mouse click
document.querySelector('p.rob').addEventListener("click", (event) => {
  event.stopPropagation();
  jump();
});


//Start the 3D rendering
animate();