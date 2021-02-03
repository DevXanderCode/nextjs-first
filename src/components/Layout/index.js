import Header from "../Header";

function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
