import { AnimatePresence, motion } from "framer-motion";
import opcodeLogo from "../../src-tauri/icons/icon.png";

/**
 * StartupIntro - 轻量启动遮罩
 *
 * 性能关键:
 *  - 品牌文字揭示用 transform scaleX 遮罩, 纯 GPU 合成, 不触发 repaint
 *    (旧版 clip-path: inset() 在 WebKit 不走 GPU, 会跟 React hydration 抢主线程)
 *  - 只保留一层极轻 vignette; 移除全视口 radial glow 以降帧绘制成本
 */
export function StartupIntro({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          {/* 极轻 vignette, 不影响合成性能 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(1200px circle at 50% 40%, transparent 65%, rgba(0,0,0,0.08))",
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative flex flex-col items-center justify-center gap-1"
          >
            {/* opcodePlus logo 左滑; 品牌文字用 GPU transform 遮罩从左向右揭示 */}
            <div className="relative flex items-center justify-center">
              {/* Logo */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 1, x: 0 }}
                animate={{ opacity: 1, scale: 1, x: -14 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/15 blur-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.9] }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <motion.img
                  src={opcodeLogo}
                  alt="opcodePlus"
                  className="h-20 w-20 rounded-lg shadow-sm"
                  transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 0.5 }}
                />
              </motion.div>

              {/* 品牌文字容器 · 只动 GPU transform, 内部 CSS mask 做 wipe 揭示 */}
              <motion.div
                initial={{ x: -35 }}
                animate={{ x: 2 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                <BrandText />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StartupIntro;

function BrandText() {
  return (
    <div className="text-5xl font-extrabold tracking-tight brand-text brand-reveal">
      <span className="brand-text-solid">opcodePlus</span>
      <span aria-hidden="true" className="brand-text-shimmer">opcodePlus</span>
    </div>
  );
}
