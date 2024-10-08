import Link from "next/link";

export const WorkContainer = ({ children }: { children?: React.ReactNode }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkBackground = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft = ({
  children,
  progress, 
}: {
  children?: React.ReactNode;
  progress: number;
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      className="flex flex-col items-center justify-center text-3xl h-[30vh] px-4 lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight = ({
  children,
  progress,
}: {
  children?: React.ReactNode;
  progress: number;
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full px-10 py-10 md:pt-0">
        {children}
      </div>
    </div>
  );
};

interface LinkProps {
  children?: React.ReactNode;
  href: string;
}

export const WorkLink = ({ href, children }: LinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-8 decoration-1"
  >
    {children}
  </Link>
);
