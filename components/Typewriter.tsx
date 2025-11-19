"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
  cursor?: boolean;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 50,
  loop = false,
  cursor = true,
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[currentTextIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing current text
            if (texts.length > 1 && loop) {
              // Wait before deleting
              setTimeout(() => setIsDeleting(true), 2000);
            } else if (onComplete) {
              onComplete();
            }
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        }
      },
      currentIndex === 0 && !isDeleting ? delay : isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    delay,
    speed,
    loop,
    onComplete,
  ]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

export function TypewriterMultiline({
  lines,
  className = "",
  lineDelay = 1000,
  speed = 50,
}: {
  lines: string[];
  className?: string;
  lineDelay?: number;
  speed?: number;
}) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const handleLineComplete = () => {
    setCompletedLines([...completedLines, lines[currentLine]]);
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={className}>
      {completedLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      {currentLine < lines.length && (
        <Typewriter
          text={lines[currentLine]}
          speed={speed}
          cursor={currentLine === lines.length - 1}
          onComplete={handleLineComplete}
        />
      )}
    </div>
  );
}
