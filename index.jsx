import React from 'react';
import { render, Box, Text, useApp, useInput, useStdout } from 'ink';

const ALT_SCREEN_ENTER = '\x1b[?1049h';
const ALT_SCREEN_EXIT = '\x1b[?1049l';
const CURSOR_HIDE = '\x1b[?25l';
const CURSOR_SHOW = '\x1b[?25h';

function LeftPanel({ height }) {
  return (
    <Box
      flexGrow={1}
      height={height}
      borderStyle="single"
      flexDirection="column"
      paddingX={1}
    >
      <Text bold>Left Panel</Text>
    </Box>
  );
}

function RightPanel({ height }) {
  return (
    <Box
      flexGrow={1}
      height={height}
      borderStyle="single"
      flexDirection="column"
      paddingX={1}
    >
      <Text bold>Right Panel</Text>
    </Box>
  );
}

function App() {
  const { exit } = useApp();
  const { stdout } = useStdout();

  const width = stdout.columns ?? 80;
  const height = stdout.rows ?? 24;

  useInput((input, key) => {
    if (input === 'q' || (key.ctrl && input === 'c')) {
      exit();
    }
  });

  return (
    <Box width={width} height={height} flexDirection="row">
      <LeftPanel height={height} />
      <RightPanel height={height} />
    </Box>
  );
}

process.stdout.write(ALT_SCREEN_ENTER);
process.stdout.write(CURSOR_HIDE);

const restoreTerminal = () => {
  process.stdout.write(CURSOR_SHOW);
  process.stdout.write(ALT_SCREEN_EXIT);
};

process.on('exit', restoreTerminal);
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

const { waitUntilExit } = render(<App />, { exitOnCtrlC: true });

await waitUntilExit();
process.exit(0);
