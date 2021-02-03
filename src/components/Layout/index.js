import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
