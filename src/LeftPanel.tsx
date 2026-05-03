import React from "react";
import { Box, Text } from "ink";

export default function LeftPanel({ width }: { width?: number }) {
  return (
    <Box
      flexGrow={0}
      flexShrink={0}
      borderStyle="single"
      flexDirection="column"
      paddingX={1}
      width={width}
    >
      <Text bold>Left Panel</Text>
    </Box>
  );
}
