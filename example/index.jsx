import React from "react";
import { render } from "ink";
import { MemoryRouter } from "react-router";
import { MouseProvider } from "@zenobius/ink-mouse";
import App from "./App";
import { enterFullscreen, exitFullscreen } from "../index.tsx";

enterFullscreen();

if (process.env.DEV?.toLowerCase() === "true") {
  process.on("exit", () => {
    exitFullscreen();
  });
}

const { waitUntilExit } = render(
  <MouseProvider>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </MouseProvider>,
  { exitOnCtrlC: true },
);

await waitUntilExit();
process.exit(0);
