import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export interface SliderProps extends React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> {
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      value = [0],
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center h-6",
          disabled && "opacity-50 pointer-events-none",
          className,
        )}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <SliderPrimitive.Range className="absolute h-full bg-primary rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block size-5 rounded-full border-2 border-primary bg-white dark:bg-slate-900 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none" />
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = "Slider";

export { Slider };
