"use client";

import { useEffect, useRef } from "react";

export default function Terminal() {
  const terminalRef = useRef(null);
  const xtermInstance = useRef(null);
  let input = "";

  // Prompt settings
  const PROMPT_TEXT = "root:~$";
  const PROMPT =
    "\x1b[38;2;81;162;255m" + PROMPT_TEXT + "\x1b[0m ";  // green prompt + reset + space
  const promptOffset = PROMPT_TEXT.length + 1; // cursor cannot go before here

  // Typing animation
  const typeText = async (text, speed = 20) => {
    const xterm = xtermInstance.current;
    for (let i = 0; i < text.length; i++) {
      xterm.write(text[i]);
      await new Promise((res) => setTimeout(res, speed));
    }
  };

  // Command handler
  const runCommand = async (cmd) => {
    const xterm = xtermInstance.current;

    const commands = {
      help: "Available commands: help, about, skills, clear",
      about: "I am Gaurav Kadam, a full stack developer.",
      skills: "JavaScript, React, Next.js, Node.js, MongoDB, Tailwind.",
    };

    if (cmd === "clear" || cmd === "cls") {
      xterm.clear();
      xterm.write(PROMPT);
      return;
    }

    const response = commands[cmd] || "Command not found.";

    // Response in white
    xterm.write("\x1b[37m");

    await typeText(response, 20);

    // Reset + new prompt
    xterm.write("\x1b[0m\r\n" + PROMPT);
  };

  // Initialize terminal
  useEffect(() => {
    let fitAddon;

    const load = async () => {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");
      await import("@xterm/xterm/css/xterm.css");

      const xterm = new Terminal({
        cursorBlink: true,
        theme: {
          background: "#000000",
          foreground: "#ffffff",
          cursor: "#00c951",
        },
        fontFamily: "monospace",
        fontSize: 20,
      });

      xtermInstance.current = xterm;
      fitAddon = new FitAddon();
      xterm.loadAddon(fitAddon);

      xterm.open(terminalRef.current);
      fitAddon.fit();

      // Print prompt initially
      xterm.write(PROMPT);

      xterm.onData((data) => {
        const cursorPos = xterm.buffer.active.cursorX;

        // BLOCK UP and DOWN
        if (data === "\u001b[A" || data === "\u001b[B") {
          return;
        }

        // LEFT arrow (block if entering prompt)
        if (data === "\u001b[D") {
          if (cursorPos > promptOffset) {
            xterm.write(data);
          }
          return;
        }

        // RIGHT arrow (block if past input)
        if (data === "\u001b[C") {
          if (cursorPos < input.length + promptOffset) {
            xterm.write(data);
          }
          return;
        }

        // ENTER
        if (data.charCodeAt(0) === 13) {
          xterm.write("\r\n");
          runCommand(input);
          input = "";
          return;
        }

        // BACKSPACE
        if (data.charCodeAt(0) === 127) {
          if (cursorPos > promptOffset) {
            input = input.slice(0, -1);
            xterm.write("\b \b");
          }
          return;
        }

        // REGULAR CHARACTERS
        input += data;
        xterm.write(data);
      });

      window.addEventListener("resize", () => fitAddon.fit());
    };

    load();
  }, []);

  return (
    <div
      ref={terminalRef}
      className="w-full h-full  overflow-hidden   "
    ></div>
  );
}
