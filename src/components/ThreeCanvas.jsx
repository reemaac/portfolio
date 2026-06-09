import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    
    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 28;
    
    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Particles configuration
    const particlesCount = 95;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position particles in a random 3D volume
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 45;
      
      // Velocities
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03,
      });
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Theme-based colors
    const particleColor = theme === 'light' ? 0xad00ff : 0x00f0ff;
    const lineColor = theme === 'light' ? 0xad00ff : 0xad00ff;
    
    // Points Material
    const material = new THREE.PointsMaterial({
      size: 0.35,
      color: particleColor,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    // Line connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: theme === 'light' ? 0.12 : 0.18,
    });
    
    let lineSegments = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(lineSegments);
    
    // Mouse hover interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 4;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 4;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);
    
    // Render Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      
      const posAttr = geometry.attributes.position;
      const arr = posAttr.array;
      
      // Update particle positions
      for (let i = 0; i < particlesCount; i++) {
        const idx = i * 3;
        arr[idx] += velocities[i].x;
        arr[idx + 1] += velocities[i].y;
        arr[idx + 2] += velocities[i].z;
        
        // Bounce particles on boundaries
        if (Math.abs(arr[idx]) > 22) velocities[i].x *= -1;
        if (Math.abs(arr[idx + 1]) > 22) velocities[i].y *= -1;
        if (Math.abs(arr[idx + 2]) > 22) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;
      
      // Generate network line linkages between close nodes
      const linePositions = [];
      for (let i = 0; i < particlesCount; i++) {
        const ix = i * 3;
        const x1 = arr[ix];
        const y1 = arr[ix + 1];
        const z1 = arr[ix + 2];
        
        for (let j = i + 1; j < particlesCount; j++) {
          const jx = j * 3;
          const x2 = arr[jx];
          const y2 = arr[jx + 1];
          const z2 = arr[jx + 2];
          
          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Link if closer than 8 units
          if (dist < 8.5) {
            linePositions.push(x1, y1, z1);
            linePositions.push(x2, y2, z2);
          }
        }
      }
      
      // Redraw lines
      scene.remove(lineSegments);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);
      
      // Apply rotation + subtle mouse tilt
      points.rotation.y = Date.now() * 0.00015 + mouse.x * 0.05;
      points.rotation.x = Date.now() * 0.00008 + mouse.y * 0.05;
      lineSegments.rotation.y = Date.now() * 0.00015 + mouse.x * 0.05;
      lineSegments.rotation.x = Date.now() * 0.00008 + mouse.y * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup WebGL resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40 md:opacity-60" />;
}
