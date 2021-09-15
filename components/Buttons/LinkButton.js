import Link from 'next/link';

export function LinkButton({ href, linkText, className = '' }) {
  return (
    <div className="cursor-pointer">
      <Link href={href}>
        <div className={`btn text-center + ${className}`}>
          <button type="button">{linkText}</button>
        </div>
      </Link>
    </div>
  );
}
