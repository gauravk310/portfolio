"use client";

import { useEffect, useRef } from "react";
import commandsJson from "./Data/command.json";
import responseJson from "./Data/response.json";

export default function Terminal() {
  const terminalRef = useRef(null);
  const xtermInstance = useRef(null);
  let input = "";

  // Prompt text
  const PROMPT_TEXT = "root:~$";
  const PROMPT =
    "\x1b[38;2;81;162;255m" + PROMPT_TEXT + "\x1b[0m ";
  const promptOffset = PROMPT_TEXT.length + 1;

  // Typing animation
  const typeText = async (text, speed = 20) => {
    const xterm = xtermInstance.current;
    for (let i = 0; i < text.length; i++) {
      xterm.write(text[i]);
      await new Promise((res) => setTimeout(res, speed));
    }
  };

  // Execute a command from JSON
  const runCommand = async (cmd) => {
    const xterm = xtermInstance.current;

    // CLEAR
    if (cmd === "clear" || cmd === "cls") {
      xterm.clear();
      xterm.write(PROMPT);
      return;
    }

    const validCommands = commandsJson.commands;

    // command does not exist
    if (!validCommands.includes(cmd)) {
      xterm.write("\x1b[31m");
      await typeText("Command not found.");
      xterm.write("\x1b[0m\r\n" + PROMPT);
      return;
    }

    // Get response object
    const result = responseJson.find((c) => c.command === cmd);

    if (!result) {
      xterm.write("\x1b[31m");
      await typeText("No response found.");
      xterm.write("\x1b[0m\r\n" + PROMPT);
      return;
    }

    xterm.write("\x1b[37m"); // white text

    // RESPONSE IS ARRAY → PRINT LIST FORMAT
    if (Array.isArray(result.response)) {
      for (let i = 0; i < result.response.length; i++) {
        await typeText(`- ${result.response[i]}`, 20);
        xterm.write("\r\n");
      }
    }
    // RESPONSE IS STRING
    else {
      await typeText(result.response, 20);
    }

    xterm.write("\x1b[0m\r\n" + PROMPT);
  };

  // Terminal setup
  useEffect(() => {
    let fitAddon;

    const load = async () => {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");
      await import("@xterm/xterm/css/xterm.css");

      const xterm = new Terminal({
        cursorBlink: true,
        theme: {
          background: "transparent",
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
        // TAB Autocomplete
        if (data === "\t") {
          const validCommands = commandsJson.commands;
          const matches = validCommands.filter((cmd) =>
            cmd.startsWith(input)
          );

          if (matches.length === 0) return;

          if (matches.length === 1) {
            const completion = matches[0];
            const remaining = completion.slice(input.length);

            input = completion;
            xterm.write(remaining);
            return;
          }

          xterm.write("\r\n\x1b[36m");
          matches.forEach((m) => xterm.write(`${m}\r\n`));
          xterm.write("\x1b[0m" + PROMPT + input);
          return;
        }

        // ENTER
        if (data.charCodeAt(0) === 13) {
          xterm.write("\r\n");
          runCommand(input.trim().toLowerCase());
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

        // Normal characters
        input += data;
        xterm.write(data);
      });

      window.addEventListener("resize", () => fitAddon.fit());
    };

    load();
  }, []);

  return (
    <div className="w-full h-full bg-[#000000] rounded-[1em] shadow-[0_0.5em_2em_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">

      {/* MacOS Title Bar */}
      <div className="h-[2.5em] bg-[#333344] flex items-center px-[1em]">
        <div className="flex gap-[0.5em]">
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#FF3B30]" />
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#FFD60A]" />
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#32D74B]" />
        </div>
      </div>

      {/* Terminal */}
      <div
        ref={terminalRef}
        className="flex-1 p-[1em] font-mono text-[1em] text-white overflow-hidden"
      />
    </div>
  );
}
