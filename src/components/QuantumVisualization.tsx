import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const QuantumVisualization = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;

    // Clear previous content
    svg.selectAll("*").remove();

    // Create quantum state visualization
    const simulation = d3.forceSimulation()
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(5));

    // Generate random nodes representing quantum states
    const nodes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      radius: Math.random() * 3 + 2
    }));

    simulation.nodes(nodes).on("tick", () => {
      const circles = svg
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", d => d.radius)
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!)
        .attr("fill", "#4F46E5")
        .attr("opacity", 0.6);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="300"
      className="w-full h-full"
      style={{ minHeight: "300px" }}
    />
  );
};

export default QuantumVisualization;