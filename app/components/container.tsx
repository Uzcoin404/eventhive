import { ReactNode } from "react";

export default function Container({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  className = className ? "container mx-auto " + className : "container mx-auto";
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
