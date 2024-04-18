"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/@navbar/navbar";
import { Provider } from "react-redux";
import store from "./store";
import MovieList from "./components/MovieList";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <div
            style={{
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
            }}
          >
            <Navbar />
            {children}
            <MovieList />
          </div>
        </Provider>
      </body>
    </html>
  );
}
