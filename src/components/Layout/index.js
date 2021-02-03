import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      <div className="min-h-60vh">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
