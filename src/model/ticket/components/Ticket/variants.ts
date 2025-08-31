import { tv } from 'tailwind-variants';

export const ticketVariants = tv({
  base: 'p-4 rounded-lg w-full',
  variants: {
    color: {
      black: 'bg-black',
      white: 'bg-white border-2 border-black',

      // colors
      blue: 'bg-blue',
      green: 'bg-green',
      red: 'bg-red',
      yellow: 'bg-yellow',
      purple: 'bg-purple',
      orange: 'bg-orange',
      pink: 'bg-pink',
      teal: 'bg-teal',
      indigo: 'bg-indigo',
      gray: 'bg-gray',
    },
  },
});