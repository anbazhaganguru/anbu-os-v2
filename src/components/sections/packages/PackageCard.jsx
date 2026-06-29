import { useState } from "react";

import DesktopPackageGrid from "./DesktopPackageGrid";
import MobilePackageGrid from "./MobilePackageGrid";
import PackageWindow from "./PackageWindow";

import { packagesData } from "../../../utils/packagesData";
import { techIcons } from "../../../utils/techIcons";

function PackageCard() {

  const [open, setOpen] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpen = (pkg) => {

    setSelectedPackage(pkg);

    setOpen(true);

  };

  return (
    <>

      <DesktopPackageGrid
        packages={packagesData}
        onOpen={handleOpen}
      />

      <MobilePackageGrid
        packages={packagesData}
        onOpen={handleOpen}
      />

      <PackageWindow
        open={open}
        onClose={() => setOpen(false)}
        packageData={selectedPackage}
        icon={
          selectedPackage &&
          techIcons[selectedPackage.key] ? (
            (() => {
              const Icon = techIcons[selectedPackage.key].icon;

              return (
                <Icon
                  className={`text-6xl ${techIcons[selectedPackage.key].color}`}
                />
              );
            })()
          ) : null
        }
      />

    </>
  );
}

export default PackageCard;