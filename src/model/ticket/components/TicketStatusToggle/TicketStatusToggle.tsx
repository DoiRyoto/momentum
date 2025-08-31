"use client";

import { VariantProps } from 'tailwind-variants';
import { ticketStatusToggleVariants } from './variants';
import { Check } from 'lucide-react';

interface TicketStatusToggleProps extends VariantProps<typeof ticketStatusToggleVariants> {
  className?: string;
  onClick?: () => void;
}

export const TicketStatusToggle = ({ className, isDone, color, onClick, ...props }: TicketStatusToggleProps) => {
  return (
    <button className={ticketStatusToggleVariants({ className, isDone, color })} onClick={onClick} {...props}>
      {isDone && (
        <Check size={16} />
      )}
    </button>
  );
};