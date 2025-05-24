import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  "relative overflow-hidden backdrop-blur-sm border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white/90 border-white/20 shadow-sm",
        gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/30 shadow-md",
        outlined: "bg-white/50 border-purple-100 shadow-sm",
        filled: "bg-purple-50 border-purple-100",
      },
      size: {
        sm: "p-3 rounded-xl",
        md: "p-4 rounded-2xl",
        lg: "p-5 rounded-3xl",
      },
      hover: {
        none: "",
        scale: "hover:scale-[1.02] cursor-pointer",
        shadow: "hover:shadow-lg cursor-pointer",
        lift: "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      hover: "none",
    }
  }
);

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, hover, ...props }, ref) => {
    return (
      <div 
        className={cn(cardVariants({ variant, size, hover }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-3", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold text-gray-900", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center mt-4 pt-4 border-t border-gray-100", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
