import { useEffect, useState, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function BackgroundCells({ className = '' }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}
    >
      {/* Fade-out gradient at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: 'linear-gradient(to bottom, transparent 60%, #0D0D0D 95%, #0D0D0D 100%)',
        }}
      />
      {/* Grid */}
      <Pattern cellBorderColor="rgba(255,255,255,0.08)" />
    </div>
  );
}

function Pattern({ cellBorderColor }) {
  const cols = 47;
  const rows = 30;
  const matrix = useMemo(
    () => new Array(cols).fill(0).map((_, i) => new Array(rows).fill(0).map((_, j) => [i, j])),
    []
  );
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        opacity: 0.5,
      }}
    >
      {matrix.map((row, rowIdx) => (
        <div
          key={`r-${rowIdx}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {row.map((_, colIdx) => (
            <Cell
              key={`c-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              clickedCell={clickedCell}
              setClickedCell={setClickedCell}
              cellBorderColor={cellBorderColor}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Cell({ rowIdx, colIdx, clickedCell, setClickedCell, cellBorderColor }) {
  const controls = useAnimation();

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2)
      );
      controls.start({
        opacity: [0, 1 - distance * 0.1, 0],
        transition: { duration: distance * 0.2 },
      });
    }
  }, [clickedCell]);

  return (
    <div
      style={{
        flex: 1,
        borderLeft: `1px solid ${cellBorderColor}`,
        borderBottom: `1px solid ${cellBorderColor}`,
      }}
      onClick={() => setClickedCell([rowIdx, colIdx])}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: [0, 1, 0.5] }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        animate={controls}
        style={{
          background: 'rgba(0, 255, 102, 0.15)',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
