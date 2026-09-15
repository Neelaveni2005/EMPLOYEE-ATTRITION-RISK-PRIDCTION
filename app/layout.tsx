import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workforce Attrition Intelligence — HR Analytics & Risk Modeling",
  description:
    "Predict, explain, and reduce employee attrition. An interactive HR analytics platform with live dashboards, a logistic-regression risk model, and a self-serve data explorer.",
  keywords: [
    "employee attrition",
    "HR analytics",
    "attrition prediction",
    "workforce intelligence",
    "people analytics",
  ],
  authors: [{ name: "Workforce Attrition Intelligence" }],
  openGraph: {
    title: "Workforce Attrition Intelligence",
    description:
      "Interactive HR analytics with live dashboards and an explainable attrition-risk model.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
