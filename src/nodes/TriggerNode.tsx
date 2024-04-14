import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type PositionTriggerNodeData = {
  label?: string;
  description?: string;
};

export function PositionTriggerNode({
  xPos,
  yPos,
  data,
}: NodeProps<PositionTriggerNodeData>) {
  const x = `${Math.round(xPos)}px`;
  const y = `${Math.round(yPos)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="integration-card">
      <span className="trigger">Trigger</span>
      <div className="app-icon">
        <img src="shopify.svg" alt="" />
      </div>
      <div className="card-content">
        {data.label && <div className="card-title">{data.label}</div>}
        <p className="card-description">
        {data.description}
        </p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
