"use client";

import { useEffect, useRef, useState } from "react";
import {
  BufferGeometry,
  Clock,
  Color,
  EllipseCurve,
  Group,
  Line,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  QuadraticBezierCurve3,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
  WireframeGeometry,
} from "three";

/**
 * Wireframe gold globe with pulsing great-circle route arcs.
 * Named three.js imports so the bundle tree-shakes to only what's used;
 * the parent loads this component with next/dynamic (ssr: false), and it
 * waits for browser idle before doing any WebGL work. Renders nothing
 * when the user prefers reduced motion or the viewport is small.
 */
export function HeroGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    if (reduced || small) return;

    // Wait for idle so the globe never competes with first paint.
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    if (idle) {
      const id = idle(() => setEnabled(true));
      return () => (window as unknown as { cancelIdleCallback?: (id: number) => void })
        .cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setEnabled(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const mount = mountRef.current;
    if (!mount) return;

    const GOLD = new Color("#C9A84C");
    const GOLD_SOFT = new Color("#E8D4A0");

    const scene = new Scene();
    const camera = new PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const globe = new Group();
    scene.add(globe);

    // Lat/long wireframe sphere
    const sphereGeo = new SphereGeometry(2, 28, 20);
    const wire = new LineSegments(
      new WireframeGeometry(sphereGeo),
      new LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.16 })
    );
    globe.add(wire);

    // Equator + tropic rings
    for (const [r, y, op] of [
      [2.0, 0, 0.3],
      [1.84, 0.78, 0.18],
      [1.84, -0.78, 0.18],
    ] as const) {
      const ring = new Line(
        new BufferGeometry().setFromPoints(
          new EllipseCurve(0, 0, r, r, 0, Math.PI * 2, false, 0).getPoints(90)
        ),
        new LineBasicMaterial({ color: GOLD, transparent: true, opacity: op })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      globe.add(ring);
    }

    // Cities (lat, lon) and arcs between them
    const toVec = (lat: number, lon: number, radius = 2) => {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lon + 180) * Math.PI) / 180;
      return new Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const routes: [number, number, number, number][] = [
      [40.7, -74.0, 48.86, 2.35], // New York -> Paris
      [48.86, 2.35, 35.68, 139.69], // Paris -> Tokyo
      [40.7, -74.0, -13.16, -72.55], // New York -> Cusco
      [48.86, 2.35, 41.9, 12.5], // Paris -> Rome
    ];

    const arcs: { mat: LineBasicMaterial; offset: number }[] = [];

    routes.forEach(([lat1, lon1, lat2, lon2], i) => {
      const a = toVec(lat1, lon1);
      const b = toVec(lat2, lon2);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.setLength(2 + a.distanceTo(b) * 0.35);
      const curve = new QuadraticBezierCurve3(a, mid, b);
      const mat = new LineBasicMaterial({
        color: GOLD_SOFT,
        transparent: true,
        opacity: 0,
      });
      globe.add(new Line(new BufferGeometry().setFromPoints(curve.getPoints(60)), mat));
      arcs.push({ mat, offset: i * 2.1 });

      for (const v of [a, b]) {
        const dot = new Mesh(
          new SphereGeometry(0.025, 8, 8),
          new MeshBasicMaterial({ color: GOLD_SOFT, transparent: true, opacity: 0.8 })
        );
        dot.position.copy(v);
        globe.add(dot);
      }
    });

    globe.rotation.z = 0.2;

    // Mouse drift
    let targetX = 0;
    let targetY = 0;
    const onMouse = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.25;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.15;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // Pause when offscreen or tab hidden
    let inView = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(mount);

    const clock = new Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!inView || document.visibilityState !== "visible") return;
      const t = clock.getElapsedTime();
      globe.rotation.y = t * 0.05 + targetX;
      globe.rotation.x = targetY;
      for (const arc of arcs) {
        const p = ((t + arc.offset) % 8.4) / 8.4;
        arc.mat.opacity = p < 0.5 ? Math.sin(p * Math.PI * 2) * 0.55 : 0;
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      scene.traverse((obj) => {
        const o = obj as unknown as {
          geometry?: { dispose(): void };
          material?: { dispose(): void };
        };
        o.geometry?.dispose?.();
        o.material?.dispose?.();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
    />
  );
}
