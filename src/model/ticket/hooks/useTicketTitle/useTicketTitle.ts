import { useMemo } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { ticketVariants } from '../../components/Ticket/variants';
import { textVariants } from '@/common/components/Text/variants';

type TicketColor = VariantProps<typeof ticketVariants>['color'];
type TitleColor = VariantProps<typeof textVariants>['color'];

export const useTicketTitle = (ticketColor: TicketColor) => {
  const titleColor = useMemo<TitleColor>(() => {
    if (!ticketColor) return 'black';
    if (ticketColor === 'white') return 'black';
    if (ticketColor === 'black') return 'white';
    return `deep${ticketColor.charAt(0).toUpperCase() + ticketColor.slice(1)}` as TitleColor;
  }, [ticketColor]);

  return { titleColor };
};