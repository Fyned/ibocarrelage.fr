import { useEffect } from 'react'

interface MetaOptions {
  title: string
  description: string
}

export function useMeta({ title, description }: MetaOptions) {
  useEffect(() => {
    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
  }, [title, description])
}
