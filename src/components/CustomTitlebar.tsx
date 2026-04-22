import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Minus, Square, X, Bot, BarChart3, FileText, Network, Info, MoreVertical, MonitorCog } from 'lucide-react';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { TooltipProvider, TooltipSimple } from '@/components/ui/tooltip-modern';

interface CustomTitlebarProps {
  onSettingsClick?: () => void;
  onAgentsClick?: () => void;
  onUsageClick?: () => void;
  onClaudeClick?: () => void;
  onMCPClick?: () => void;
  onInfoClick?: () => void;
}

export const CustomTitlebar: React.FC<CustomTitlebarProps> = ({
  onSettingsClick,
  onAgentsClick,
  onUsageClick,
  onClaudeClick,
  onMCPClick,
  onInfoClick
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSessionInfoPopoverOpen, setIsSessionInfoPopoverOpen] = useState(false);
  const [showSessionInfo, setShowSessionInfo] = useState(() => {
    return localStorage.getItem('show_session_info') !== 'false';
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sessionInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (sessionInfoRef.current && !sessionInfoRef.current.contains(event.target as Node)) {
        setIsSessionInfoPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSessionInfo = () => {
    const newValue = !showSessionInfo;
    setShowSessionInfo(newValue);
    localStorage.setItem('show_session_info', String(newValue));
    window.dispatchEvent(new CustomEvent('session-info-toggle', { detail: newValue }));
  };

  const handleMinimize = async () => {
    try {
      const window = getCurrentWindow();
      await window.minimize();
      console.log('Window minimized successfully');
    } catch (error) {
      console.error('Failed to minimize window:', error);
    }
  };

  const handleMaximize = async () => {
    try {
      const window = getCurrentWindow();
      const isMaximized = await window.isMaximized();
      if (isMaximized) {
        await window.unmaximize();
        console.log('Window unmaximized successfully');
      } else {
        await window.maximize();
        console.log('Window maximized successfully');
      }
    } catch (error) {
      console.error('Failed to maximize/unmaximize window:', error);
    }
  };

  const handleClose = async () => {
    try {
      const window = getCurrentWindow();
      await window.close();
      console.log('Window closed successfully');
    } catch (error) {
      console.error('Failed to close window:', error);
    }
  };

  return (
    <TooltipProvider>
    <div 
      className="relative z-[200] h-11 bg-background/95 backdrop-blur-sm flex items-center justify-between select-none border-b border-border/50 tauri-drag"
      data-tauri-drag-region
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left side - macOS Traffic Light buttons */}
      <div className="flex items-center space-x-2 pl-5">
        <div className="flex items-center space-x-2">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="group relative w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200 flex items-center justify-center tauri-no-drag"
            title={t('nav.close')}
          >
            {isHovered && (
              <X size={8} className="text-red-900 opacity-60 group-hover:opacity-100" />
            )}
            <span className="sr-only">Close window</span>
          </button>

          {/* Minimize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMinimize();
            }}
            className="group relative w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 flex items-center justify-center tauri-no-drag"
            title={t('nav.minimize')}
          >
            {isHovered && (
              <Minus size={8} className="text-yellow-900 opacity-60 group-hover:opacity-100" />
            )}
            <span className="sr-only">Minimize window</span>
          </button>

          {/* Maximize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMaximize();
            }}
            className="group relative w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 flex items-center justify-center tauri-no-drag"
            title={t('nav.maximize')}
          >
            {isHovered && (
              <Square size={6} className="text-green-900 opacity-60 group-hover:opacity-100" />
            )}
            <span className="sr-only">Maximize window</span>
          </button>
        </div>
      </div>

      {/* Right side - Navigation icons with improved spacing */}
      <div className="flex items-center pr-5 gap-3 tauri-no-drag">
        {/* Primary actions group */}
        <div className="flex items-center gap-1">
          {onAgentsClick && (
            <TooltipSimple content={t('nav.agents')} side="bottom">
              <motion.button
                onClick={onAgentsClick}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors tauri-no-drag"
              >
                <Bot size={16} />
              </motion.button>
            </TooltipSimple>
          )}

          {/* Session Info Toggle */}
          <div className="relative" ref={sessionInfoRef}>
            <TooltipSimple content={t('nav.sessionInfo')} side="bottom">
              <motion.button
                onClick={() => setIsSessionInfoPopoverOpen(!isSessionInfoPopoverOpen)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors tauri-no-drag"
              >
                <MonitorCog size={16} />
              </motion.button>
            </TooltipSimple>

            <AnimatePresence>
              {isSessionInfoPopoverOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-lg z-[250] p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm">{t('nav.sessionInfo')}</span>
                    <button
                      onClick={toggleSessionInfo}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${showSessionInfo ? 'bg-primary' : 'bg-muted'}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${showSessionInfo ? 'translate-x-4' : 'translate-x-0'}`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">{t('nav.sessionInfoDesc')}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {onUsageClick && (
            <TooltipSimple content={t('nav.usageDashboard')} side="bottom">
              <motion.button
                onClick={onUsageClick}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors tauri-no-drag"
              >
                <BarChart3 size={16} />
              </motion.button>
            </TooltipSimple>
          )}
        </div>

        {/* Visual separator */}
        <div className="w-px h-5 bg-border/50" />

        {/* Secondary actions group */}
        <div className="flex items-center gap-1">
          {onSettingsClick && (
            <TooltipSimple content={t('nav.settings')} side="bottom">
              <motion.button
                onClick={onSettingsClick}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors tauri-no-drag"
              >
                <Settings size={16} />
              </motion.button>
            </TooltipSimple>
          )}

          {/* Dropdown menu for additional options */}
          <div className="relative" ref={dropdownRef}>
            <TooltipSimple content={t('nav.moreOptions')} side="bottom">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-1"
              >
                <MoreVertical size={16} />
              </motion.button>
            </TooltipSimple>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-[250]">
                <div className="py-1">
                  {onClaudeClick && (
                    <button
                      onClick={() => {
                        onClaudeClick();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-3"
                    >
                      <FileText size={14} />
                      <span>{t('nav.claudeMd')}</span>
                    </button>
                  )}
                  
                  {onMCPClick && (
                    <button
                      onClick={() => {
                        onMCPClick();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-3"
                    >
                      <Network size={14} />
                      <span>{t('nav.mcpServers')}</span>
                    </button>
                  )}
                  
                  {onInfoClick && (
                    <button
                      onClick={() => {
                        onInfoClick();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-3"
                    >
                      <Info size={14} />
                      <span>{t('nav.about')}</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};
