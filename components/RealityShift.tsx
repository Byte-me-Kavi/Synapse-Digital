"use client";

export default function RealityShift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      {children}
    </div>
  );
}
