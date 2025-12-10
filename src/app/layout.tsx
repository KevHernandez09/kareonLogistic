import type { Metadata } from "next";

import "../styles/base/reset.css";
import "../styles/base/typography.css";
import "../styles/layout/dashboard-layout.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kareon Logistic",
    description: "Kareon - Plataforma de logística",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
