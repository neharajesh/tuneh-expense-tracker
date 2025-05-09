import Link from "next/link";

export const Header = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="brand-font">
          <Link href={"/"}>TuNeh</Link>
        </div>
        <div>Total This Month: Rs. 0</div>
      </div>
    </nav>
  );
};
