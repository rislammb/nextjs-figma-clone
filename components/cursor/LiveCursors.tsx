import { useOthers } from "@liveblocks/react/suspense";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

export default function LiveCursors() {
  const others = useOthers();
  return others.map(({ connectionId, presence }) => {
    if (!presence.cursor) return null;

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message || ""}
      />
    );
  });
}
