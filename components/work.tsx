import Link from "next/link";

export const WorkContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkBackground = ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-black h-[30vh] lg:h-auto"></div>
        <div className="bg-black h-[70vh] lg:min-h-screen"></div>
    </div>
)