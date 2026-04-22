---
name: Opcode Plus - Tauri Desktop App
description: Tauri-based desktop app wrapping Claude Code CLI with custom UI, i18n support, and various UI components
type: project
---

## Overview
Tauri-based desktop app wrapping Claude Code CLI with custom UI for model selection and thinking modes.

## Key Components
- `src/components/ToolWidgets.tsx` - System Initialized card with session info (Session ID, Model, Working Directory, Available Tools, MCP Services)
- `src/components/StreamMessage.tsx` - Message rendering including cost/duration/turns/tokens stats (lines ~834-850)
- `src/components/ClaudeCodeSession.tsx` - Main session component with message handling
- `src/components/AgentRunOutputViewer.tsx` - Agent run output with metrics
- `src/components/AgentExecution.tsx` - Agent execution with cost/duration stats
- `src/components/SessionOutputViewer.tsx` - Session output viewer
- `src/components/AgentRunView.tsx` - Agent run view

## Ongoing Work
- i18n: Translating hardcoded English strings (System Initialized, Session ID, Working Directory, Available Tools, Cost, Duration, Turns, Total tokens) into corresponding languages
- Theme: Renaming Claude theme to '原生 CC'
- UI: Adding session info toggle button in toolbar (next to agent button) with popover containing on/off switch to show/hide system initialized info in conversations

## Tech Stack
- Tauri (Rust backend)
- React + TypeScript frontend
- Uses virtual scrolling for message list
