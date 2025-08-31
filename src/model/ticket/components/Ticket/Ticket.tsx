import { VariantProps } from 'tailwind-variants';
import { ticketVariants } from './variants';
import { Text } from '@/common/components/Text';
import { useTicketTitle } from '../../hooks/useTicketTitle/useTicketTitle';
import { TicketTitle } from '../TicketTitle';
import { Check, Circle } from 'lucide-react';
import { useState } from 'react';
import { TicketStatusToggle } from '../TicketStatusToggle';

interface TicketProps extends VariantProps<typeof ticketVariants> {
  className?: string;
  title: string;
  tags: string[];
  isDone?: boolean;
}

export const Ticket = ({ className, color, title, tags, isDone: initialIsDone = false, ...props }: TicketProps) => {
  const [isDone, setIsDone] = useState(initialIsDone);
  const { titleColor } = useTicketTitle (color);

  const handleToggle = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={ticketVariants({ className, color })} {...props}>
      <div className="flex items-start gap-4">
        <TicketStatusToggle isDone={isDone} color={color} onClick={handleToggle} className="mt-[7px]" />
        <div className="flex flex-col gap-2">
          <TicketTitle color={titleColor}>{title}</TicketTitle>
        </div>
      </div>
    </div>
  );
}