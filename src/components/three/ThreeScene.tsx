'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="w-full h-full bg-[url('/square-pattern.jpg')] bg-repeat bg-contain bg-opacity-40 bg-red-500">
      {/* <Image src={squarePattern} alt='grid' className='opacity-20' /> */}
    </div>
  );
}

export default ThreeScene;
