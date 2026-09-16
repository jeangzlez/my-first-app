import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  color: string;
};

export default function Button({
  text,
  href,
  color,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`block rounded px-4 py-2 text-white ${color}`}
    >
      {text}
    </Link>
  );
}