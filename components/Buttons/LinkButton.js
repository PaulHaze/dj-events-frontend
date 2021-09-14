import Link from 'next/link';

export function LinkButton({ href, linkText, className = '' }) {
  return (
    <div className={`btn text-center + ${className}`}>
      <Link href={href}>
        <button type="button">{linkText}</button>
      </Link>
    </div>
  );
}
