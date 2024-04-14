import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type PositionActionNodeData = {
  label?: string;
  description?: string;
};

export function PositionActionNode({
  xPos,
  yPos,
  data,
}: NodeProps<PositionActionNodeData>) {
  const x = `${Math.round(xPos)}px`;
  const y = `${Math.round(yPos)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="integration-card">
      <Handle type="target" position={Position.Top} />
      <div className="app-icon">
        <img src="mailchimp.svg" alt="" />
      </div>
      <div className="card-content">
        {data.label && <div className="card-title">{data.label}</div>}
        <p className="card-description">
        {data.description}
        </p>
      </div>
    </div>
  );
}
