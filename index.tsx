export { default as Button } from "./src/Button.tsx";
export { default as NavBar } from "./src/NavBar.tsx";
export { default as ScrollableBox } from "./src/ScrollableBox";
export { default as TextInput } from "./src/TextInput.tsx";

const ALT_SCREEN_ENTER = "\x1b[?1049h";
const ALT_SCREEN_EXIT = "\x1b[?1049l";
const CURSOR_HIDE = "\x1b[?25l";
const CURSOR_SHOW = "\x1b[?25h";

export function enterFullscreen() {
  process.stdout.write(ALT_SCREEN_ENTER);
  process.stdout.write(CURSOR_HIDE);
}

export function exitFullscreen() {
  process.stdout.write(CURSOR_SHOW);
  process.stdout.write(ALT_SCREEN_EXIT);
}
