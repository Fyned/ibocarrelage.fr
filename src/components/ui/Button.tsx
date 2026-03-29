import { type ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[#E31E24] text-white shadow-md hover:bg-[#C41A1F] hover:shadow-lg',
  outline:
    'border-2 border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white',
  ghost:
    'text-[#E31E24] hover:bg-[#E31E24]/10',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, as, href, target, rel, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    if (as === 'a' && href) {
      return (
        <a href={href} target={target} rel={rel} className={cls}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
