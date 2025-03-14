import type { HTMLAttributes } from 'astro/types'
import clsx from 'clsx'
import { Link } from './Link'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 ',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & ((HTMLAttributes<'button'> & { href?: undefined }) | HTMLAttributes<'a'>) & {
    className?: string
  }

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    // @ts-expect-error some weird TS issue
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
