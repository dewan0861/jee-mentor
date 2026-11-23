'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content?: string;
  className?: string;
  inline?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content = '', className = '', inline = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    try {
      // Split by double dollar ($$...$$) first for block math
      const blockParts = content.split(/(\$\$[\s\S]*?\$\$)/g);

      return blockParts
        .map((part) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2).trim();
            try {
              return `<div class="my-3 overflow-x-auto py-1 text-center">${katex.renderToString(math, {
                displayMode: true,
                throwOnError: false,
              })}</div>`;
            } catch (e) {
              return `<code>${math}</code>`;
            }
          }

          // In standard text segments, split by single dollar ($...$) for inline math
          const inlineParts = part.split(/(\$[^\$]+?\$)/g);
          return inlineParts
            .map((subPart) => {
              if (subPart.startsWith('$') && subPart.endsWith('$')) {
                const math = subPart.slice(1, -1).trim();
                try {
                  return katex.renderToString(math, {
                    displayMode: false,
                    throwOnError: false,
                  });
                } catch (e) {
                  return `<code>${math}</code>`;
                }
              }
              // Replace line breaks with <br /> for readable step-by-step formatting
              return subPart.replace(/\n/g, '<br />');
            })
            .join('');
        })
        .join('');
    } catch (err) {
      return content;
    }
  }, [content]);

  if (inline) {
    return (
      <span
        className={`math-content inline ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <div
      className={`math-content leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
