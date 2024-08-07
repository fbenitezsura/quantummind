import Link from 'next/link';

export default function NavItem({ href, children }) {
  return (
    <Link href={href}>
      <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">{children}</span>
    </Link>
  );
}
