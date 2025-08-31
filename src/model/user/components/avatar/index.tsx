import Image from 'next/image'
import { type FC } from 'react'
import type { User } from '../../types'

type Props = {
  user: Pick<User, 'name' | 'avatar'>
  size?: 'sm' | 'md' | 'lg'
}

export const UserAvatar: FC<Props> = ({ user, size = 'md' }) => {
  const sizeClass = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }[size]

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden bg-gray-200`}>
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt={user.name}
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        />
      ) : (
        <div className={`${sizeClass} flex items-center justify-center text-gray-600 bg-gray-300`}>
          {user.name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
}