import type { HTMLAttributes } from 'astro/types'

type Props = HTMLAttributes<'a'> & { className?: string }

export const Link = (props: Props) => {
  const { children, ...rest } = props
  // @ts-expect-error some weird TS error
  return <a {...rest}>{children}</a>
}
