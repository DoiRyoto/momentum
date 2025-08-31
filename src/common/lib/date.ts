// General purpose date utilities - low context dependency

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatRelativeTime = (date: Date): string => {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return `${diffInSeconds}秒前`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}分前`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}時間前`
  
  return formatDate(date)
}