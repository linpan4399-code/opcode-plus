<!--
  opcode-plus — getAsterisk/opcode 的社区增强版
  归属/法律说明：见 ATTRIBUTION.md
  合并的 PR 列表：见 CHANGELOG.md
-->

<div align="center">

# opcodePlus

**[getAsterisk/opcode](https://github.com/getAsterisk/opcode) 的社区增强版**

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![下载最新版本](https://img.shields.io/badge/下载-最新版本-blue?style=for-the-badge)](https://github.com/linpan4399-code/opcode-plus/releases/latest)
[![许可证](https://img.shields.io/badge/许可证-AGPL--3.0-green?style=for-the-badge)](./LICENSE)

</div>

---

> [!IMPORTANT]
> **你正在查看 [opcode-plus](https://github.com/linpan4399-code/opcode-plus)** — 基于 [getAsterisk/opcode](https://github.com/getAsterisk/opcode) 的社区增强版，合并了多个上游长期未处理的高质量 PR。本项目**不附属于**原作者或 Anthropic。完整归属见 [`ATTRIBUTION.md`](./ATTRIBUTION.md)，合并的 PR 清单见 [`CHANGELOG.md`](./CHANGELOG.md)。许可证：AGPL-3.0（与上游一致）。

> [!NOTE]
> 本项目与 Anthropic 无关联、未获认可或赞助。Claude 是 Anthropic, PBC 的商标。这是一个使用 Claude 的独立开发者项目。

---

<div align="center">
  <img src="src-tauri/icons/icon.png" alt="opcode Logo" width="120" height="120">

  <h1>opcode</h1>
  
  <p>
    <strong>强大的 Claude Code GUI 应用和工具包</strong>
  </p>
  <p>
    <strong>创建自定义 Agent、管理交互式 Claude Code 会话、运行安全的后台 Agent 等</strong>
  </p>
  
  <p>
    <a href="#功能特性"><img src="https://img.shields.io/badge/功能特性-✨-blue?style=for-the-badge" alt="Features"></a>
    <a href="#安装"><img src="https://img.shields.io/badge/安装-🚀-green?style=for-the-badge" alt="Installation"></a>
    <a href="#使用指南"><img src="https://img.shields.io/badge/使用指南-📖-purple?style=for-the-badge" alt="Usage"></a>
    <a href="https://discord.com/invite/KYwhHVzUsY"><img src="https://img.shields.io/badge/Discord-加入-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  </p>
</div>

![457013521-6133a738-d0cb-4d3e-8746-c6768c82672c](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

https://github.com/user-attachments/assets/6bceea0f-60b6-4c3e-a745-b891de00b8d0

## 🌟 opcodePlus 的新特性

opcodePlus 在原版 opcode 基础上增加了社区贡献的改进：

### ✨ Plus 版本特性

- **🌍 国际化 (i18n)**：完整的双语支持（英文/中文），覆盖 UI 和斜杠命令
- **📝 Markdown 渲染**：斜杠命令描述支持富文本 Markdown 和语法高亮
- **🎨 增强的 UI**：改进的斜杠命令选择器，更好的视觉层次
- **🔧 Bug 修复**：来自社区 PR 的多项稳定性改进和 Bug 修复
- **🚀 CI/CD 改进**：自动化多平台构建（Linux、macOS、Windows）
- **📦 更好的打包**：优化的全平台安装包

### 🔄 已合并的社区 PR

完整的合并 PR 列表和改进详情见 [`CHANGELOG.md`](./CHANGELOG.md)。

---

## 📋 目录

- [🌟 opcodePlus 的新特性](#-opcodeplus-的新特性)
- [✨ 功能特性](#-功能特性)
- [📖 使用指南](#-使用指南)
- [🚀 安装](#-安装)
- [🔨 从源码构建](#-从源码构建)
- [🛠️ 开发](#️-开发)
- [🤝 贡献](#-贡献)
- [📄 许可证](#-许可证)

## ✨ 功能特性

### 🗂️ **项目与会话管理**
- **可视化项目浏览器**：浏览 `~/.claude/projects/` 中的所有 Claude Code 项目
- **会话历史**：查看并恢复过去的编码会话，保留完整上下文
- **智能搜索**：通过内置搜索快速查找项目和会话
- **会话洞察**：一目了然地查看首条消息、时间戳和会话元数据

### 🤖 **CC Agents**
- **自定义 AI Agent**：创建具有自定义系统提示和行为的专用 Agent
- **Agent 库**：为不同任务构建专用 Agent 集合
- **后台执行**：在独立进程中运行 Agent，实现非阻塞操作
- **执行历史**：跟踪所有 Agent 运行，包含详细日志和性能指标

### 📊 **使用分析仪表板**
- **成本跟踪**：实时监控 Claude API 使用情况和成本
- **Token 分析**：按模型、项目和时间段详细分解
- **可视化图表**：美观的图表展示使用趋势和模式
- **数据导出**：导出使用数据用于会计和分析

### 🔌 **MCP 服务器管理**
- **服务器注册表**：从中央 UI 管理模型上下文协议服务器
- **简易配置**：通过 UI 添加服务器或从现有配置导入
- **连接测试**：使用前验证服务器连接性
- **Claude Desktop 导入**：从 Claude Desktop 导入服务器配置

### ⏰ **时间线与检查点**
- **会话版本控制**：在编码会话的任意时刻创建检查点
- **可视化时间线**：通过分支时间线导航会话历史
- **即时恢复**：一键跳转到任意检查点
- **分叉会话**：从现有检查点创建新分支
- **差异查看器**：精确查看检查点之间的变化

### 📝 **CLAUDE.md 管理**
- **内置编辑器**：直接在应用内编辑 CLAUDE.md 文件
- **实时预览**：实时查看 Markdown 渲染效果
- **项目扫描器**：查找项目中的所有 CLAUDE.md 文件
- **语法高亮**：完整的 Markdown 支持和语法高亮

## 📖 使用指南

### 快速开始

1. **启动 opcodePlus**：安装后打开应用
2. **欢迎界面**：在 CC Agents 和 Projects 之间选择
3. **首次设置**：opcodePlus 会自动检测你的 `~/.claude` 目录

### 管理项目

```
Projects → 选择项目 → 查看会话 → 恢复或新建
```

- 点击任意项目查看其会话
- 每个会话显示首条消息和时间戳
- 直接恢复会话或开始新会话

### 创建 Agent

```
CC Agents → 创建 Agent → 配置 → 执行
```

1. **设计你的 Agent**：设置名称、图标和系统提示
2. **配置模型**：在可用的 Claude 模型中选择
3. **设置权限**：配置文件读写和网络访问权限
4. **执行任务**：在任意项目上运行你的 Agent

### 跟踪使用情况

```
菜单 → 使用仪表板 → 查看分析
```

- 按模型、项目和日期监控成本
- 导出数据用于报告
- 设置使用警报（即将推出）

### 使用 MCP 服务器

```
菜单 → MCP 管理器 → 添加服务器 → 配置
```

- 手动添加服务器或通过 JSON 添加
- 从 Claude Desktop 配置导入
- 使用前测试连接

## 🚀 安装

### 预构建版本（推荐）

下载适合你平台的最新版本：

#### 🐧 Linux
- [**下载 .deb 安装包**](https://github.com/linpan4399-code/opcode-plus/releases/latest)（Ubuntu/Debian）
  ```bash
  sudo dpkg -i opcodePlus_*_amd64.deb
  ```
- [**下载 .AppImage**](https://github.com/linpan4399-code/opcode-plus/releases/latest)（通用）
  ```bash
  chmod +x opcodePlus_*_amd64.AppImage
  ./opcodePlus_*_amd64.AppImage
  ```

#### 🍎 macOS
- [**下载 .dmg 安装器**](https://github.com/linpan4399-code/opcode-plus/releases/latest)（通用版：Apple Silicon + Intel）
  - 下载后拖拽到应用程序文件夹
  - 首次启动时右键点击选择"打开"（未签名应用）

#### 🪟 Windows
- [**下载 .exe 安装器**](https://github.com/linpan4399-code/opcode-plus/releases/latest)
  - 运行安装程序并按照设置向导操作
  - Windows 可能显示 SmartScreen 警告（点击"更多信息"→"仍要运行"）

## 🔨 从源码构建

### 前置要求

#### 系统要求
- **操作系统**：Windows 10/11、macOS 11+ 或 Linux（Ubuntu 20.04+）
- **内存**：最低 4GB（推荐 8GB）
- **存储空间**：至少 1GB 可用空间

#### 必需工具

1. **Rust**（1.70.0 或更高版本）
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Node.js**（18+ 或 Bun）
   ```bash
   # 使用 npm
   npm install
   # 或使用 bun
   curl -fsSL https://bun.sh/install | bash
   bun install
   ```

3. **Claude Code CLI**
   - 从 [Claude 官方网站](https://claude.ai/code)下载
   - 确保 `claude` 在你的 PATH 中可用

#### 平台特定依赖

**Linux（Ubuntu/Debian）**
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
- 安装 [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- 安装 [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/)

### 构建步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/linpan4399-code/opcode-plus.git
   cd opcode-plus
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   bun install
   ```

3. **构建应用**
   ```bash
   npm run tauri build
   # 或
   bun run tauri build
   ```

4. **查找构建产物**
   - **Linux**：`src-tauri/target/release/bundle/deb/` 和 `src-tauri/target/release/bundle/appimage/`
   - **macOS**：`src-tauri/target/release/bundle/dmg/`
   - **Windows**：`src-tauri/target/release/bundle/nsis/`

## 🛠️ 开发

### 开发模式运行

```bash
npm run tauri dev
# 或
bun run tauri dev
```

### 项目结构

```
opcode-plus/
├── src/                    # React 前端
│   ├── components/         # UI 组件
│   ├── lib/               # 工具和 API
│   └── i18n/              # 国际化
├── src-tauri/             # Rust 后端
│   ├── src/               # Rust 源代码
│   └── icons/             # 应用图标
└── .github/workflows/     # CI/CD 流水线
```

## 🤝 贡献

欢迎贡献！这个 fork 的存在是为了比上游更快地合并社区改进。

1. Fork 本仓库
2. 创建你的特性分支（`git checkout -b feature/amazing-feature`）
3. 提交你的更改（`git commit -m 'feat: add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 **AGPL-3.0 许可证** - 详见 [LICENSE](LICENSE) 文件。

与上游 [getAsterisk/opcode](https://github.com/getAsterisk/opcode) 项目使用相同的许可证。

## 🙏 致谢

- 原始项目：[getAsterisk/opcode](https://github.com/getAsterisk/opcode)
- 所有在此 fork 中合并了 PR 的社区贡献者
- Anthropic 提供的 Claude Code
- Tauri 团队提供的出色框架

---

<div align="center">
  <p>由社区用 ❤️ 制作</p>
  <p>
    <a href="https://github.com/linpan4399-code/opcode-plus/issues">报告 Bug</a>
    ·
    <a href="https://github.com/linpan4399-code/opcode-plus/issues">请求功能</a>
  </p>
</div>
