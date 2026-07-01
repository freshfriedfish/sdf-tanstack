import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function MetalPipeRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="metalpipe-radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function MetalPipeRadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="metalpipe-radio-group-item"
      className={cn(
        "aspect-square size-5 shrink-0 rounded-full bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="metalpipe-radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-blue-500 absolute top-1/2 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { MetalPipeRadioGroup, MetalPipeRadioGroupItem }
