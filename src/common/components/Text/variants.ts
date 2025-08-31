import { tv } from 'tailwind-variants';

export const textVariants = tv({
  base: '',
  variants: {
    color: {
      black: 'text-black',
      white: 'text-white',
      // light color
      blue: 'text-blue',
      green: 'text-green',
      red: 'text-red',
      yellow: 'text-yellow',
      purple: 'text-purple',
      orange: 'text-orange',
      pink: 'text-pink',
      teal: 'text-teal',
      indigo: 'text-indigo',
      gray: 'text-gray',
      // deep color
      deepBlue: 'text-deep-blue',
      deepGreen: 'text-deep-green',
      deepRed: 'text-deep-red',
      deepYellow: 'text-deep-yellow',
      deepPurple: 'text-deep-purple',
      deepOrange: 'text-deep-orange',
      deepPink: 'text-deep-pink',
      deepTeal: 'text-deep-teal',
      deepIndigo: 'text-deep-indigo',
      deepGray: 'text-deep-gray',
    },
  },
  defaultVariants: {
    color: 'black',
  },
});