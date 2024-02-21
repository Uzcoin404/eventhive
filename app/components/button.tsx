import Link from "next/link";

interface ButtonProps {
  link?: string;
  children: string;
  type?: "contained" | "outlined";
  className?: string;
}

export default function Button({
  link,
  children,
  type = "contained",
  className,
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={`btn ${type} ${className ?? ""}`} {...props}>
        {children}
      </Link>
    );
  } else {
    <button className={`btn ${type} ${className ?? ""}`} {...props}>
      {children}
    </button>;
  }
}
