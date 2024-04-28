import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className ="py-2">In which thoughts, opinions and sometimes knowledge are shared.</h1>
      <Link
        href="blog/should-i-start-a-blog"
        passHref
        className="py-4 underline"
      >
        <h2 className="mb-2 text-xl font-semibold">Should I start a blog?</h2>
      </Link>
    </div>
  );
}
