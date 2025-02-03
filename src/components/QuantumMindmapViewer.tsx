import React, { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';

interface Node {
  id: string;
  name: string;
  val: number;
  color?: string;
  dimension?: number;
}

interface Link {
  source: string;
  target: string;
  strength?: number;
}

const QuantumMindmapViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);

  const graphData = {
    nodes: [
      { id: 'quantum', name: 'Quantum Core', val: 20, color: '#4F46E5', dimension: 5 },
      { id: 'neural', name: 'Neural Network', val: 15, color: '#10B981', dimension: 4 },
      { id: 'crypto', name: 'Quantum Cryptography', val: 12, color: '#F59E0B', dimension: 3 },
    ],
    links: [
      { source: 'quantum', target: 'neural', strength: 0.8 },
      { source: 'quantum', target: 'crypto', strength: 0.6 },
      { source: 'neural', target: 'crypto', strength: 0.4 },
    ]
  };

  useEffect(() => {
    if (!containerRef.current) return;

    graphRef.current = ForceGraph3D()(containerRef.current)
      .graphData(graphData)
      .nodeLabel('name')
      .nodeColor((node: any) => node.color)
      .nodeVal((node: any) => node.val)
      .linkWidth((link: any) => (link.strength || 0.5) * 2)
      .linkColor(() => '#999')
      .backgroundColor('#ffffff');

    return () => {
      if (graphRef.current) {
        containerRef.current?.removeChild(containerRef.current.firstChild!);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default QuantumMindmapViewer;