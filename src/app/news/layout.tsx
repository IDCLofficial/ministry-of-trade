import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "News",
  description: "Latest news, announcements and updates from the Ministry of Trade, Commerce & Investment, Imo State.",
  path: "/news",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
