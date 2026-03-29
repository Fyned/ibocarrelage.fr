import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddings = {
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
}

export default function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md border border-[#F0F0F0] ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
