import { Suspense } from "react";

type AssetLoaderProps = {
  children: React.ReactNode;
};

export default function AssetLoader({ children }: AssetLoaderProps) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
