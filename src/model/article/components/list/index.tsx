import Link from 'next/link'
import { type FC } from 'react'
import type { Article } from '../../types'

type Props = {
  articles: Article[]
}

export const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <article key={article.id} className="border rounded-lg p-4 hover:bg-gray-50">
          <Link href={`/articles/${article.id}`}>
            <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
              {article.title}
            </h2>
          </Link>
          <p className="text-gray-600 mb-2 line-clamp-3">
            {article.content.substring(0, 150)}...
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
            <time>
              {article.createdAt.toLocaleDateString()}
            </time>
          </div>
        </article>
      ))}
    </div>
  )
}