import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { ticketTitleVariants } from './variants';
import { Text } from '@/common/components/Text';
import { textVariants } from '@/common/components/Text/variants';

interface TicketTitleProps extends VariantProps<typeof ticketTitleVariants> {
  children: React.ReactNode;
  className?: string;
  color?: VariantProps<typeof textVariants>['color'];
}

export const TicketTitle: React.FC<TicketTitleProps> = ({ 
  color, 
  children, 
  className, 
  ...props 
}) => {
  return (
    <Text as="span" color={color} className={ticketTitleVariants({ className })} {...props}>
      {children}
    </Text>
  );
}