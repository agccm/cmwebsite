import React from "react";
import Header from "./header";
import PortableText from "./portableText";
import Container from "./container";

const Layout = (props) => {
  const {
    children,
    onHideNav,
    onShowNav,
    showNav,
    siteTitle,
    footerText,
    logo,
  } = props;
  return (
    <>
      <Header
        logo={logo}
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
      />
      <div className="bg-white">{children}</div>
      <footer className="border-t-2 border-solid border-gray-200">
        <Container>
          <div className="text-sm text-center">
            <PortableText blocks={footerText} />
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
