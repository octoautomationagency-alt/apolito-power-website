import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-heading inline-flex items-baseline gap-1.5 text-2xl font-bold uppercase leading-none tracking-tight',
        className,
      )}
    >
      <span className="text-foreground">Apolito</span>
      <span className="gold-gradient-text">Power</span>
    </span>
  )
}
