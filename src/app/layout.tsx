import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";
import Auth from "@configs/authProvider";
import { AuthProviders } from "@/context/auth";
import { ConfigProvider as Config } from "@/context/configs";
import type { Metadata } from "next";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "Bodnar administração",
  description: "Bodnar administração",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <Auth>
        <ConfigProvider locale={ptBR}>
          <AuthProviders>
            <Config>
              <body>{children}</body>
            </Config>
          </AuthProviders>
        </ConfigProvider>
      </Auth>
    </html>
  );
}
