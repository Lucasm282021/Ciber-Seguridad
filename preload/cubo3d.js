
// Cubo 3D con imagen en las caras y bordes tipo rayos láser
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear texto de loading personalizado
const loadingText = document.createElement('div');
loadingText.id = 'loading-cube';
loadingText.innerHTML = '<span id="loading-main">Loading</span><span id="loading-dots">...</span>';
document.body.appendChild(loadingText);

// Animación de puntos
let dotCount = 0;
const dotsSpan = loadingText.querySelector('#loading-dots');
const loadingInterval = setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  dotsSpan.textContent = '.'.repeat(dotCount + 1);
}, 400);

// Luz ambiente y puntual
scene.add(new THREE.AmbientLight(0x00aaff, 0.6));
const pointLight = new THREE.PointLight(0x00ffff, 2, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const geometry = new THREE.BoxGeometry();
const loader = new THREE.TextureLoader();
loader.load('img/logo-ciberseguridad.webp', function(texture) {
  // Detener animación de puntos
  clearInterval(loadingInterval);
  // El cartel de 'Cargando...' nunca desaparece
  const materials = Array(6).fill().map(() =>
    new THREE.MeshPhongMaterial({ map: texture, shininess: 120, emissive: 0x003366, emissiveIntensity: 0.5 })
  );
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  // Bordes tipo rayos láser
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true });
  const lines = new THREE.LineSegments(edges, lineMaterial);
  cube.add(lines);

  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Efecto glow animado en los bordes tipo láser
    const time = Date.now() * 0.008;
    const glow = Math.abs(Math.sin(time)) * 0.8 + 0.2;
    lineMaterial.color.setRGB(0, glow, 1);
    lineMaterial.opacity = 0.8 + glow * 0.2;
    lineMaterial.needsUpdate = true;
    renderer.render(scene, camera);
  }
  animate();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
