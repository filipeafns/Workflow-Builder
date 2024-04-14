import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { PositionTriggerNode } from "./TriggerNode";
import { PositionActionNode } from "./ActionNode";

export const initialNodes = [
  {
    id: "a",
    position: { x: 100, y: 0 },
    data: { 
      label: "Shopify",
      description: "A new user is created"
    },
    type: "trigger",
  },
  {
    id: "b",
    position: { x: 0, y: 100 },
    data: { 
      label: "Shopify",
      description: "Add user to campaign"
    },
    type: "position-logger",
  },
  {
    id: "c",
    position: { x: 200, y: 100 },
    data: { 
      label: "Mailchimp",
      description: "Send welcome email"
    },
    type: "action",
  },
  {
    id: "d",
    type: "action",
    position: { x: 0, y: 200 },
    data: { 
      label: "Mailchimp",
      description: "Send discount campaign",
    },
  },
  
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "trigger":PositionTriggerNode,
  "action":PositionActionNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
