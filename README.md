<!--
  opcode-plus — Community-enhanced fork of getAsterisk/opcode
  Attribution / legal notes: see ATTRIBUTION.md
  Merged PRs list: see CHANGELOG.md
-->

<div align="center">

# opcodePlus

**Community-Enhanced Fork of [getAsterisk/opcode](https://github.com/getAsterisk/opcode)**

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![Download Latest](https://img.shields.io/badge/Download-Latest%20Release-blue?style=for-the-badge)](https://github.com/linpan4399-code/opcode-plus/releases/latest)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green?style=for-the-badge)](./LICENSE)

</div>

---

> [!IMPORTANT]
> **You are viewing [opcode-plus](https://github.com/linpan4399-code/opcode-plus)** — a community-enhanced fork of [getAsterisk/opcode](https://github.com/getAsterisk/opcode) that merges multiple high-quality PRs that have been pending upstream. This project is **not affiliated with** the original author or Anthropic. See [`ATTRIBUTION.md`](./ATTRIBUTION.md) for full attribution and [`CHANGELOG.md`](./CHANGELOG.md) for merged PR list. License: AGPL-3.0 (same as upstream).

> [!NOTE]
> This project is not affiliated with, endorsed by, or sponsored by Anthropic. Claude is a trademark of Anthropic, PBC. This is an independent developer project using Claude.

---

<div align="center">
  <img src="src-tauri/icons/icon.png" alt="opcode Logo" width="120" height="120">

  <h1>opcode</h1>
  
  <p>
    <strong>A powerful GUI app and Toolkit for Claude Code</strong>
  </p>
  <p>
    <strong>Create custom agents, manage interactive Claude Code sessions, run secure background agents, and more.</strong>
  </p>
  
  <p>
    <a href="#features"><img src="https://img.shields.io/badge/Features-✨-blue?style=for-the-badge" alt="Features"></a>
    <a href="#installation"><img src="https://img.shields.io/badge/Install-🚀-green?style=for-the-badge" alt="Installation"></a>
    <a href="#usage"><img src="https://img.shields.io/badge/Usage-📖-purple?style=for-the-badge" alt="Usage"></a>
    <a href="https://discord.com/invite/KYwhHVzUsY"><img src="https://img.shields.io/badge/Discord-Join-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  </p>
</div>

![457013521-6133a738-d0cb-4d3e-8746-c6768c82672c](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

https://github.com/user-attachments/assets/6bceea0f-60b6-4c3e-a745-b891de00b8d0

## 🌟 What's New in opcodePlus

opcodePlus enhances the original opcode with community-contributed improvements:

### ✨ Plus Features

- **🌍 Internationalization (i18n)**: Full bilingual support (English/Chinese) for UI and slash commands
- **📝 Markdown Rendering**: Rich markdown support in slash command descriptions with syntax highlighting
- **🎨 Enhanced UI**: Improved slash command picker with better visual hierarchy
- **🔧 Bug Fixes**: Multiple stability improvements and bug fixes from community PRs
- **🚀 CI/CD Improvements**: Automated multi-platform builds (Linux, macOS, Windows)
- **📦 Better Packaging**: Optimized installers for all platforms

### 🔄 Merged Community PRs

See [`CHANGELOG.md`](./CHANGELOG.md) for the complete list of merged pull requests and improvements.

---

## 📋 Table of Contents

- [🌟 What's New in opcodePlus](#-whats-new-in-opcodeplus)
- [✨ Features](#-features)
- [📖 Usage](#-usage)
- [🚀 Installation](#-installation)
- [🔨 Build from Source](#-build-from-source)
- [🛠️ Development](#️-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🗂️ **Project & Session Management**
- **Visual Project Browser**: Navigate through all your Claude Code projects in `~/.claude/projects/`
- **Session History**: View and resume past coding sessions with full context
- **Smart Search**: Find projects and sessions quickly with built-in search
- **Session Insights**: See first messages, timestamps, and session metadata at a glance

### 🤖 **CC Agents**
- **Custom AI Agents**: Create specialized agents with custom system prompts and behaviors
- **Agent Library**: Build a collection of purpose-built agents for different tasks
- **Background Execution**: Run agents in separate processes for non-blocking operations
- **Execution History**: Track all agent runs with detailed logs and performance metrics

### 📊 **Usage Analytics Dashboard**
- **Cost Tracking**: Monitor your Claude API usage and costs in real-time
- **Token Analytics**: Detailed breakdown by model, project, and time period
- **Visual Charts**: Beautiful charts showing usage trends and patterns
- **Export Data**: Export usage data for accounting and analysis

### 🔌 **MCP Server Management**
- **Server Registry**: Manage Model Context Protocol servers from a central UI
- **Easy Configuration**: Add servers via UI or import from existing configs
- **Connection Testing**: Verify server connectivity before use
- **Claude Desktop Import**: Import server configurations from Claude Desktop

### ⏰ **Timeline & Checkpoints**
- **Session Versioning**: Create checkpoints at any point in your coding session
- **Visual Timeline**: Navigate through your session history with a branching timeline
- **Instant Restore**: Jump back to any checkpoint with one click
- **Fork Sessions**: Create new branches from existing checkpoints
- **Diff Viewer**: See exactly what changed between checkpoints

### 📝 **CLAUDE.md Management**
- **Built-in Editor**: Edit CLAUDE.md files directly within the app
- **Live Preview**: See your markdown rendered in real-time
- **Project Scanner**: Find all CLAUDE.md files in your projects
- **Syntax Highlighting**: Full markdown support with syntax highlighting

## 📖 Usage

### Getting Started

1. **Launch opcodePlus**: Open the application after installation
2. **Welcome Screen**: Choose between CC Agents or Projects
3. **First Time Setup**: opcodePlus will automatically detect your `~/.claude` directory

### Managing Projects

```
Projects → Select Project → View Sessions → Resume or Start New
```

- Click on any project to view its sessions
- Each session shows the first message and timestamp
- Resume sessions directly or start new ones

### Creating Agents

```
CC Agents → Create Agent → Configure → Execute
```

1. **Design Your Agent**: Set name, icon, and system prompt
2. **Configure Model**: Choose between available Claude models
3. **Set Permissions**: Configure file read/write and network access
4. **Execute Tasks**: Run your agent on any project

### Tracking Usage

```
Menu → Usage Dashboard → View Analytics
```

- Monitor costs by model, project, and date
- Export data for reports
- Set up usage alerts (coming soon)

### Working with MCP Servers

```
Menu → MCP Manager → Add Server → Configure
```

- Add servers manually or via JSON
- Import from Claude Desktop configuration
- Test connections before using

## 🚀 Installation

### Pre-built Releases (Recommended)

Download the latest release for your platform:

#### 🐧 Linux
- [**Download .deb package**](https://github.com/linpan4399-code/opcode-plus/releases/latest) (Ubuntu/Debian)
  ```bash
  sudo dpkg -i opcodePlus_*_amd64.deb
  ```
- [**Download .AppImage**](https://github.com/linpan4399-code/opcode-plus/releases/latest) (Universal)
  ```bash
  chmod +x opcodePlus_*_amd64.AppImage
  ./opcodePlus_*_amd64.AppImage
  ```

#### 🍎 macOS
- [**Download .dmg installer**](https://github.com/linpan4399-code/opcode-plus/releases/latest) (Universal: Apple Silicon + Intel)
  - Download and drag to Applications folder
  - Right-click and select "Open" on first launch (unsigned app)

#### 🪟 Windows
- [**Download .exe installer**](https://github.com/linpan4399-code/opcode-plus/releases/latest)
  - Run the installer and follow the setup wizard
  - Windows may show a SmartScreen warning (click "More info" → "Run anyway")

## 🔨 Build from Source

### Prerequisites

#### System Requirements
- **Operating System**: Windows 10/11, macOS 11+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 1GB free space

#### Required Tools

1. **Rust** (1.70.0 or later)
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Node.js** (18+ or Bun)
   ```bash
   # Using npm
   npm install
   # Or using bun
   curl -fsSL https://bun.sh/install | bash
   bun install
   ```

3. **Claude Code CLI**
   - Download from [Claude's official site](https://claude.ai/code)
   - Ensure `claude` is available in your PATH

#### Platform-Specific Dependencies

**Linux (Ubuntu/Debian)**
```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  libssl-dev \
  libxdo-dev
```

**macOS**
```bash
xcode-select --install
```

**Windows**
- Install [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- Install [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/)

### Build Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/linpan4399-code/opcode-plus.git
   cd opcode-plus
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Build the Application**
   ```bash
   npm run tauri build
   # or
   bun run tauri build
   ```

4. **Find Your Build**
   - **Linux**: `src-tauri/target/release/bundle/deb/` and `src-tauri/target/release/bundle/appimage/`
   - **macOS**: `src-tauri/target/release/bundle/dmg/`
   - **Windows**: `src-tauri/target/release/bundle/nsis/`

## 🛠️ Development

### Run in Development Mode

```bash
npm run tauri dev
# or
bun run tauri dev
```

### Project Structure

```
opcode-plus/
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── lib/               # Utilities and API
│   └── i18n/              # Internationalization
├── src-tauri/             # Rust backend
│   ├── src/               # Rust source code
│   └── icons/             # App icons
└── .github/workflows/     # CI/CD pipelines
```

## 🤝 Contributing

Contributions are welcome! This fork exists to merge community improvements faster than upstream.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **AGPL-3.0 License** - see the [LICENSE](LICENSE) file for details.

Same license as the upstream [getAsterisk/opcode](https://github.com/getAsterisk/opcode) project.

## 🙏 Acknowledgments

- Original project: [getAsterisk/opcode](https://github.com/getAsterisk/opcode)
- All community contributors whose PRs are merged in this fork
- Anthropic for Claude Code
- The Tauri team for the amazing framework

---

<div align="center">
  <p>Made with ❤️ by the community</p>
  <p>
    <a href="https://github.com/linpan4399-code/opcode-plus/issues">Report Bug</a>
    ·
    <a href="https://github.com/linpan4399-code/opcode-plus/issues">Request Feature</a>
  </p>
</div>
