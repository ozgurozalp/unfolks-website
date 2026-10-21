"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  /** BCP 47 locale for digit grouping, such as "tr-TR". */
  locale?: string
  /**
   * Text around the number, such as "%" or "+". It lives in the same text
   * node so a gradient fill (background-clip: text) covers it all; Safari
   * does not paint such a fill into a nested inline-block.
   */
  prefix?: string
  suffix?: string
}

function formatNumber(value: number, locale: string, decimalPlaces: number) {
  return Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(value.toFixed(decimalPlaces)))
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  locale = "en-US",
  prefix = "",
  suffix = "",
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${formatNumber(latest, locale, decimalPlaces)}${suffix}`
        }
      }),
    [springValue, decimalPlaces, locale, prefix, suffix]
  )

  return (
    <span
      ref={ref}
      className={cn(
        // No colour of its own: callers set it, e.g. a gradient fill.
        "inline-block tracking-wider tabular-nums",
        className
      )}
      {...props}
    >
      {prefix}
      {formatNumber(direction === "down" ? value : startValue, locale, decimalPlaces)}
      {suffix}
    </span>
  )
}
