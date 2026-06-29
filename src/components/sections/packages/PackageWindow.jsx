import { useEffect, useState } from "react";

import DesktopPackageWindow from "./DesktopPackageWindow";
import MobilePackageWindow from "./MobilePackageWindow";

function PackageWindow(props) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  if (isMobile) {
    return (
      <MobilePackageWindow
        {...props}
      />
    );
  }

  return (
    <DesktopPackageWindow
      {...props}
    />
  );
}

export default PackageWindow;