import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getSession } from "@/utils/helpers";
import ReduxProvider from "@/provider/reduxProvider";
import AuthProvider from "@/provider/authProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beer Haven",
  description: "Discover the Art of Refreshment.",
};

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster />
        <ReduxProvider>
          <AuthProvider session={session}>
            {session?.user && <Header />}
            {children}
            {session?.user && <Footer />}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
