import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "Trigger" } },
  {
    id: "b",
    position: { x: 0, y: 100 },
    data: { label: "NetSuite" },
  },
  { id: "c", position: { x: 200, y: 100 }, data: { label: "Iterate" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "Snowflake" },
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
