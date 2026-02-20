import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Portfolio | Web Developer",
  description: "Web Developer & Final Year Student",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-white">
	    <LanguageProvider>
          {children}
		</LanguageProvider>
      </body>
    </html>
  );
}
