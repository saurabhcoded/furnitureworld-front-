import Navbar from "./Navbar";
import Footer from "./Footer";
import Social from "./Social";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Social />
      <main>{children}</main>
      <Footer />
    </>
  );
}
