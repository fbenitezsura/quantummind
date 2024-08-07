export default function Heading({ level = 1, children }) {
    const Tag = `h${level}`;
    return <Tag className="text-2xl font-bold">{children}</Tag>;
  }
  