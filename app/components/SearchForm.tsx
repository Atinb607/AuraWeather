'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function SearchForm() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      startTransition(() => {
        router.push(`/weather/${encodeURIComponent(query)}`)
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <Input
        type="text"
        placeholder="Search city..."
        className="w-full bg-gray-700/30 border-gray-600/50 focus:border-gray-500 backdrop-blur-sm placeholder:text-gray-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isPending}
      />
      <button 
        type="submit" 
        className="absolute right-3 top-1/2 -translate-y-1/2"
        disabled={isPending}
      >
        <Search className="h-4 w-4 text-gray-400" />
      </button>
    </form>
  )
}

