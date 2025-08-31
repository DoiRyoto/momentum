import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { textVariants } from './variants';

type TextElement = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  as?: TextElement;
}

export const Text: React.FC<TextProps> = ({ color, children, className, as: Element = 'span', ...props }) => {
  return (
    <Element className={textVariants({ color, className })} {...props}>
      {children}
    </Element>
  );
}
