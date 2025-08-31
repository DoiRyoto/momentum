import { tv } from 'tailwind-variants';

export const ticketStatusToggleVariants = tv({
  base: 'flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors',
  variants: {
    isDone: {
      true: '',
      false: 'bg-transparent',
    },
    color: {
      black: 'border-white text-black',
      white: 'border-black text-white',
      blue: 'border-deep-blue text-blue',
      green: 'border-deep-green text-green',
      red: 'border-deep-red text-red',
      yellow: 'border-deep-yellow text-yellow',
      purple: 'border-deep-purple text-purple',
      orange: 'border-deep-orange text-orange',
      pink: 'border-deep-pink text-pink',
      teal: 'border-deep-teal text-teal',
      indigo: 'border-deep-indigo text-indigo',
      gray: 'border-deep-gray text-gray',
    },
  },
  compoundVariants: [
    {
      isDone: true,
      color: 'black',
      class: 'bg-white',
    },
    {
      isDone: true,
      color: 'white',
      class: 'bg-black',
    },
    {
      isDone: true,
      color: 'blue',
      class: 'bg-deep-blue',
    },
    {
      isDone: true,
      color: 'green',
      class: 'bg-deep-green',
    },
    {
      isDone: true,
      color: 'red',
      class: 'bg-deep-red',
    },
    {
      isDone: true,
      color: 'yellow',
      class: 'bg-deep-yellow',
    },
    {
      isDone: true,
      color: 'purple',
      class: 'bg-deep-purple',
    },
    {
      isDone: true,
      color: 'orange',
      class: 'bg-deep-orange',
    },
    {
      isDone: true,
      color: 'pink',
      class: 'bg-deep-pink',
    },
    {
      isDone: true,
      color: 'teal',
      class: 'bg-deep-teal',
    },
    {
      isDone: true,
      color: 'indigo',
      class: 'bg-deep-indigo',
    },
    {
      isDone: true,
      color: 'gray',
      class: 'bg-deep-gray',
    },
  ],
  defaultVariants: {
    isDone: false,
    color: 'black',
  },
});