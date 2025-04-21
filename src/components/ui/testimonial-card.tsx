
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  const Card = href ? "a" : "div"
  
  return (
    <Card
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "flex w-[calc(100vw-2rem)] min-w-[300px] max-w-[500px] flex-col gap-4",
        "rounded-xl border border-border bg-card p-6 text-card-foreground",
        "transition-all duration-200 hover:shadow-md",
        href && "cursor-pointer"
      )}
    >
      <div className="flex-1">
        <p className="text-left text-lg leading-relaxed">"{text}"</p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.handle}</p>
        </div>
      </div>
    </Card>
  )
}
