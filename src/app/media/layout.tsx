import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media Gallery",
  description: "Photo and media gallery of the Ministry of Trade, Commerce and Investment, Imo State Government.",
  path: "/media",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
