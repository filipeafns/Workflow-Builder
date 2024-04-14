import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  { id: "a->b", source: "a", target: "b", animated: true },
  { id: "a->c", source: "a", target: "c"},
  { id: "b->d", source: "b", target: "d", animated: true },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
