import React from "react";
import { cn } from "@/lib/utils";

interface ThinkingIndicatorProps {
  /** 竖条数量, 默认 6 */
  bars?: number;
  /** 单条宽度 px, 默认 3 */
  barWidth?: number;
  /** 条间距 px, 默认 3 */
  gap?: number;
  /** 最低高度 px (静止态), 默认 6 */
  minHeight?: number;
  /** 峰值高度 px (动画顶点), 默认 22 */
  peakHeight?: number;
  /** 每条延迟步长 s, 默认 0.1 (形成波浪错相) */
  stagger?: number;
  className?: string;
}

/**
 * Thinking 指示器 · 6 根竖条波浪动画
 *
 * 参考 docs/小狗.html, 颜色通过 CSS `var(--color-primary)` 跟随主题 (dark/light/gray/nativecc 均自适配).
 * 动画 keyframes 定义在 styles.css `.thinking-indicator`.
 * 物理质感: 1.2s 周期 + cubic-bezier(0.45, 0, 0.55, 1) ease-in-out, 配 drop-shadow 发光.
 */
export const ThinkingIndicator: React.FC<ThinkingIndicatorProps> = ({
  bars = 6,
  barWidth = 3,
  gap = 3,
  minHeight = 6,
  peakHeight = 22,
  stagger = 0.1,
  className,
}) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("thinking-indicator", className)}
      style={
        {
          gap,
          "--ti-min-h": `${minHeight}px`,
          "--ti-peak-h": `${peakHeight}px`,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            width: barWidth,
            borderRadius: barWidth,
            animationDelay: `${i * stagger}s`,
          }}
        />
      ))}
    </div>
  );
};
