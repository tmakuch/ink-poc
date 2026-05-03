import React, { useMemo, useRef, useState } from "react";
import { Box, Text } from "ink";
import type { BoxProps } from "ink";
import { useOnMouseHover, useOnMouseClick } from "@zenobius/ink-mouse";

interface ButtonProps extends BoxProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick, ...props }: ButtonProps) {
  const ref = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useOnMouseClick(ref, (event) => {
    setClicking(event);
    if (event && typeof onClick === "function") {
      onClick();
    }
  });
  useOnMouseHover(ref, setHovering);

  const border = useMemo(() => {
    if (clicking) {
      return "double";
    }

    if (hovering) {
      return "singleDouble";
    }

    return "single";
  }, [clicking, hovering]);

  return (
    <Box gap={1} paddingX={1} ref={ref} borderStyle={border} {...props}>
      <Text>{label}</Text>
    </Box>
  );
}
