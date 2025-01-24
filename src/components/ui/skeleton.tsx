import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-muted h-5 mt-1", className)}
      {...props}
    />
  )
}

export { Skeleton }
