import { type FC } from 'react'

// npm packages - very low context dependency
import Link from 'next/link'

// common modules - low context dependency
import { Spinner } from '@/common/components/spinner'
import { formatDate } from '@/common/lib/date'

// model modules - medium context dependency
import { UserAvatar } from '@/model/user/components/avatar'
import { ArticleList } from '@/model/article/components/list'
import type { User } from '@/model/user/types'
import type { Article } from '@/model/article/types'

// Example data (in real app, this would come from API)
const mockUser: User = {
  id: '1',
  name: '田中太郎',
  email: 'tanaka@example.com',
  avatar: '',
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Next.jsでのディレクトリ構成について',
    content: 'app-common-model構成について詳しく解説します...',
    authorId: '1',
    tags: ['Next.js', 'Architecture'],
    published: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

const ExamplePage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        app-common-model 構成の例
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">ユーザー情報</h2>
        <div className="flex items-center gap-4">
          <UserAvatar user={mockUser} size="lg" />
          <div>
            <p className="font-semibold">{mockUser.name}</p>
            <p className="text-gray-600">{mockUser.email}</p>
            <p className="text-sm text-gray-500">
              登録日: {formatDate(mockUser.createdAt)}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">記事一覧</h2>
        <ArticleList articles={mockArticles} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">共通コンポーネント</h2>
        <div className="flex items-center gap-4">
          <Spinner />
          <span>読み込み中のスピナー</span>
        </div>
      </div>

      <div className="mt-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline"
        >
          ← ホームに戻る
        </Link>
      </div>
    </div>
  )
}

export default ExamplePage