import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cursorOverlay: {
    position: 'fixed',
    width: 20,
    height: 20,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    mixBlendMode: 'difference', // Apply a filter effect
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    position: 'absolute',
    top: -10,
    left: -10,
  },
});

const CursorOverlay = () => {
  const classes = useStyles();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={classes.cursorOverlay} style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <div className={classes.circle}></div>
    </div>
  );
};

export default CursorOverlay;
