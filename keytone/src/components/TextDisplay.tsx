import { useEffect, useRef, useState } from 'react';

interface TextDisplayProps {
  text: string;
  currentIndex: number;
  typedChars: Array<{ char: string; correct: boolean }>;
  cursorStyle?: 'line' | 'underline';
}

export function TextDisplay({
  text,
  currentIndex,
  typedChars,
  cursorStyle = 'line',
}: TextDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentCharRef = useRef<HTMLSpanElement>(null);
  const [recentError, setRecentError] = useState<number | null>(null);

  // Scroll container to keep current character visible (no scrollbar jank)
  useEffect(() => {
    if (!currentCharRef.current || !containerRef.current) return;
    const container = containerRef.current;
    const char = currentCharRef.current;
    const charTop = char.offsetTop;
    const charHeight = char.offsetHeight;
    const containerHeight = container.clientHeight;
    // Keep current char in the upper-third of the visible area
    const targetScrollTop = charTop - containerHeight / 3 + charHeight / 2;
    container.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
  }, [currentIndex]);

  // Track recent errors for per-character underline animation
  useEffect(() => {
    const lastTyped = typedChars[typedChars.length - 1];
    if (lastTyped && !lastTyped.correct) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Triggering 300ms shake animation on typing error; setTimeout-based cleanup is a legitimate effect pattern
      setRecentError(typedChars.length - 1);
      const timer = setTimeout(() => setRecentError(null), 300);
      return () => clearTimeout(timer);
    }
  }, [typedChars]);

  return (
    <div className="relative bg-gray-900/90 backdrop-blur-md rounded-3xl border border-gray-700/50 shadow-2xl shadow-indigo-500/10">
      <div
        ref={containerRef}
        className="p-5 md:p-6 overflow-y-auto no-scrollbar min-h-48 max-h-72"
      >
      {/* Text container - responsive sizing with word wrapping */}
      <div className="font-mono text-xl md:text-2xl leading-relaxed tracking-wide select-none text-center">
        {text.split(/(\s+)/).map((part, partIndex, parts) => {
          // Calculate the starting global index for this part
          const startIndex = parts.slice(0, partIndex).join('').length;

          return (
            <span key={partIndex} className="inline-block">
              {part.split('').map((char, charIndex) => {
                const index = startIndex + charIndex;
                const isTyped = index < typedChars.length;
                const isCurrent = index === currentIndex;
                const typedInfo = typedChars[index];
                const isRecentError = index === recentError;
                const isLatestCorrect = index === typedChars.length - 1 && typedInfo?.correct;

                let className = 'relative inline transition-all duration-150 ';

                if (isTyped) {
                  if (typedInfo?.correct) {
                    className += 'text-emerald-400 ';
                    if (isLatestCorrect) {
                      className += 'animate-char-pop ';
                    }
                  } else {
                    // Enhanced error styling
                    className += 'text-red-400 ';
                  }
                } else if (isCurrent) {
                  className += 'text-white scale-110 ';
                } else {
                  className += 'text-gray-500 ';
                }

                // Handle space character display
                const displayChar = char === ' ' ? '\u00A0' : char;
                const isSpace = char === ' ';

                return (
                  <span
                    key={index}
                    ref={isCurrent ? currentCharRef : null}
                    className={className}
                  >
                    {/* Error underline with glow */}
                    {isTyped && !typedInfo?.correct && (
                      <span 
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full ${isRecentError ? 'animate-pulse shadow-lg shadow-red-500/50' : ''}`}
                      />
                    )}
                    
                    {/* Error background for visibility */}
                    {isTyped && !typedInfo?.correct && (
                      <span className="absolute inset-0 bg-red-500/20 rounded -mx-0.5 -my-0.5 px-0.5 py-0.5" />
                    )}
                    
                    {displayChar}
                    
                    {/* Current character cursor */}
                    {isCurrent && cursorStyle === 'underline' && (
                      <>
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
                        <span className="absolute inset-0 bg-indigo-500/10 rounded -mx-0.5" />
                      </>
                    )}
                    {isCurrent && cursorStyle === 'line' && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-400/60" />
                    )}
                    
                    {/* Show what was typed incorrectly*/}
                    {typedInfo && !typedInfo.correct && (
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-red-400 bg-red-900/80 px-1.5 py-0.5 rounded font-bold whitespace-nowrap z-10">
                        {isSpace && typedInfo.char !== ' ' ? typedInfo.char : null}
                        {!isSpace && typedInfo.char === ' ' ? '␣' : null}
                        {!isSpace && typedInfo.char !== ' ' ? typedInfo.char : null}
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
      </div>

      {/* Progress bar - pinned to visual bottom, outside scroll area */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-800/50 rounded-b-3xl overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-200 ease-out shadow-lg shadow-indigo-500/30"
          style={{ width: `${(currentIndex / text.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default TextDisplay;
