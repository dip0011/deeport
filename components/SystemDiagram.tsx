export interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  accent?: boolean;
}

export interface DiagramEdge {
  from: string;
  to: string;
  dashed?: boolean;
}

interface SystemDiagramProps {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const BOX_HEIGHT = 30;
const charWidth = 6.6;
const padX = 22;

function boxWidth(label: string) {
  return Math.max(64, label.length * charWidth + padX);
}

// Clip a center-to-center segment so it starts and ends on the box edges,
// leaving a small gap so the arrowhead sits just outside the target box.
function clipToBox(
  cx: number,
  cy: number,
  hw: number,
  hh: number,
  vx: number,
  vy: number,
  gap: number
) {
  const tx = vx === 0 ? Infinity : hw / Math.abs(vx);
  const ty = vy === 0 ? Infinity : hh / Math.abs(vy);
  const t = Math.min(tx, ty);
  const len = Math.hypot(vx, vy) || 1;
  const gapT = gap / len;
  const tt = t + gapT;
  return { x: cx + vx * tt, y: cy + vy * tt };
}

export default function SystemDiagram({ nodes, edges }: SystemDiagramProps) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const hh = BOX_HEIGHT / 2;

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 400 220"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="diagram-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(11,13,18,0.4)" />
          </marker>
        </defs>

        {/* Edges, clipped to box boundaries so arrowheads stay visible */}
        {edges.map((edge, i) => {
          const a = nodeMap.get(edge.from);
          const b = nodeMap.get(edge.to);
          if (!a || !b) return null;
          const vx = b.x - a.x;
          const vy = b.y - a.y;
          const start = clipToBox(a.x, a.y, boxWidth(a.label) / 2, hh, vx, vy, 2);
          const end = clipToBox(b.x, b.y, boxWidth(b.label) / 2, hh, -vx, -vy, 3);
          return (
            <line
              key={`e-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="rgba(11,13,18,0.28)"
              strokeWidth={1.25}
              strokeDasharray={edge.dashed ? '4 4' : undefined}
              markerEnd="url(#diagram-arrow)"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n) => {
          const w = boxWidth(n.label);
          return (
            <g key={n.id}>
              <rect
                x={n.x - w / 2}
                y={n.y - BOX_HEIGHT / 2}
                width={w}
                height={BOX_HEIGHT}
                rx={7}
                fill={n.accent ? 'rgba(79,70,229,0.06)' : '#FFFFFF'}
                stroke={n.accent ? '#4F46E5' : 'rgba(11,13,18,0.18)'}
                strokeWidth={n.accent ? 1.4 : 1}
              />
              <text
                x={n.x}
                y={n.y + 3.5}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight={n.accent ? 600 : 500}
                fill={n.accent ? '#4F46E5' : '#5F6368'}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
