import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type PositionLoggerNodeData = {
  label?: string;
  description?: string;
};

export function PositionLoggerNode({
  data,
}: NodeProps<PositionLoggerNodeData>) {

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="integration-card">
      <Handle type="target" position={Position.Top} />
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
