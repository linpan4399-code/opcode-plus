# CHANGELOG

本仓库所有修改相对于上游 [getAsterisk/opcode@70c16d8](https://github.com/getAsterisk/opcode/commit/70c16d8a49) 的差异记录。

## [Unreleased] — opcode-plus 初始版本 (2026-04-18)

### 项目层面 / Project
- 本 fork 的创建说明：汇集上游与 [winfunc/opcode](https://github.com/winfunc/opcode) 中长期未处理的社区 PR，统一合并、测试、维护。
- 新增 [`ATTRIBUTION.md`](./ATTRIBUTION.md) 溯源说明。
- 所有合入 PR 通过 `git cherry-pick` 保留原 commit 作者署名。可用 `git log --format='%an <%ae>' | sort -u` 查看完整贡献者名单。

---

### 已合并的 Pull Request / Merged PRs

合并策略：优先选择冲突最小、影响范围清晰的 PR。对于跟其它 PR 冲突的改动，优先选择更新日期较近、代码质量较好的版本。

#### Bug Fixes

| PR | 贡献者 | 说明 |
|---|---|---|
| [#69](https://github.com/winfunc/opcode/pull/69) | [@NerdSnipe](https://github.com/NerdSnipe) | 修复 macOS 应用包启动时 `env: node: No such file or directory` 错误（自动注入 Homebrew/usr/local 路径） |
| [#74](https://github.com/winfunc/opcode/pull/74) | [@iBreaker](https://github.com/iBreaker) | 智能错误解析：将 Claude 使用限额等错误转换成用户友好的提示 |
| [#439](https://github.com/winfunc/opcode/pull/439) | [@seijikohara](https://github.com/seijikohara) | 修复中日韩（CJK）输入法 IME 在未完成候选词时误触 Enter 提交消息的问题 |
| [#445](https://github.com/winfunc/opcode/pull/445) | [@greasematic](https://github.com/greasematic) | 补齐 web server 中缺失的 `CLAUDE.md` REST API 路由 |
| [#464](https://github.com/winfunc/opcode/pull/464) | [@jakeefr](https://github.com/jakeefr) | 用静态 ESM `import` 替代 `require()` 调用 Tauri 事件接口（修复新版 Tauri 兼容性） |

#### Features

| PR | 贡献者 | 说明 |
|---|---|---|
| [#226](https://github.com/winfunc/opcode/pull/226) | [@agarwalvishal](https://github.com/agarwalvishal) | 新增 GitHub Actions CI/CD 工作流：自动构建和发布 |
| [#286](https://github.com/winfunc/opcode/pull/286) (tip) | [@phatblat](https://github.com/phatblat) | 支持通过 [mise](https://mise.jdx.dev/) 版本管理器发现 Claude CLI |
| [#428](https://github.com/winfunc/opcode/pull/428) | [@fardeenxyz](https://github.com/fardeenxyz) | MCP 服务器启停控制（UI 可直接启动/关闭 MCP 服务进程） |
| [#449](https://github.com/winfunc/opcode/pull/449) | [@josegtmonteiro](https://github.com/josegtmonteiro) | 全项目全文会话搜索：支持 `AND / OR / NOT` 操作符、精确短语、可折叠结果展示、高亮片段 |

#### Internationalization (i18n)

| PR | 贡献者 | 说明 |
|---|---|---|
| [#424](https://github.com/winfunc/opcode/pull/424) | [@LegnaOS](https://github.com/LegnaOS) | **完整的 12 语言国际化支持**（英、简中、繁中、日、韩、越、阿、德、西、法、俄、葡）。设置页提供语言切换器，翻译覆盖欢迎页、项目列表、MCP 管理、代理设置、存储、Agents、快捷命令等所有主要面板。手动解决了与 `#449` 搜索功能、`#428` MCP 启停在 ProjectList/MCPImportExport 中的冲突。|

#### Accessibility

| PR | 贡献者 | 说明 |
|---|---|---|
| [#403](https://github.com/winfunc/opcode/pull/403) (tip) | [@lpintes](https://github.com/lpintes) | 为标题栏窗口控制按钮添加屏幕阅读器标签 |

---

### 调整记录 / Adjustments

- **Revert PR #230 (custom model name)** — 合入后发现前端依赖的 `getAvailableModels` API 定义在 PR 的更早 commit 中，该 commit 与其他 PR 冲突无法合入，导致类型检查失败。为保证构建稳定，整体回退 PR #230。后续可手动补合。

---

### 跳过未合的 PR / Skipped PRs

以下 PR 因与其他 PR 或上游主干冲突过大，在本次批量合入中跳过。**欢迎后续手动逐个解冲突提交**：

| 类别 | PR 编号 |
|---|---|
| 版本管理器探测 | #346 #373 #427 |
| 功能增强 | #54 #56 #134 #261 #315 #379 #419 |
| Windows 支持 | #457 |
| 主题 | #191 |
| 修复杂项 | #80（含依赖更新冲突） |

### 未来路线 / Roadmap

- [ ] 重新尝试 #230（自定义模型名），一并合入其依赖的基础 commit。
- [ ] 考虑合并 [#457 Windows 完整支持](https://github.com/winfunc/opcode/pull/457)。
- [ ] 继续补齐部分仍为英文的硬编码文案（例如搜索结果区域），未覆盖的地方用了 `defaultValue` 占位。

---

## 贡献者 / Contributors

执行以下命令查看完整贡献者名单（包括上游原作者和所有 PR 贡献者）：

```bash
git log --format='%an <%ae>' | sort -u
```

本次合入批次的主要贡献者（按首字母）：

- [@agarwalvishal](https://github.com/agarwalvishal)
- [@fardeenxyz](https://github.com/fardeenxyz)
- [@greasematic](https://github.com/greasematic)
- [@iBreaker](https://github.com/iBreaker)
- [@jakeefr](https://github.com/jakeefr)
- [@josegtmonteiro](https://github.com/josegtmonteiro)
- [@LegnaOS](https://github.com/LegnaOS)
- [@lpintes](https://github.com/lpintes)
- [@NerdSnipe](https://github.com/NerdSnipe)
- [@phatblat](https://github.com/phatblat)
- [@seijikohara](https://github.com/seijikohara)

以及上游原作者 [@getAsterisk](https://github.com/getAsterisk) 团队，特此致谢。
