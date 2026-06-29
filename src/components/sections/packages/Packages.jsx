import SectionHeader from "../../common/SectionHeader";
import PackageTerminal from "./PackageTerminal";
import PackageCard from "./PackageCard";

function Packages() {
  return (
    <section
      id="packages"
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        <SectionHeader
          command="packages"
          title="Installed Packages"
          subtitle="Core technologies currently available inside the ANBU.OS environment."
        />

        {/* Desktop */}

        <div className="mt-12 hidden xl:grid grid-cols-[1.4fr_0.8fr] gap-8 items-start">

          {/* Package Cards */}

          <PackageCard />

          {/* Floating Terminal */}

          <div className="sticky top-28">

            <PackageTerminal />

          </div>

        </div>

        {/* Tablet & Mobile */}

        <div className="mt-10 xl:hidden space-y-8">

          <PackageCard />

          <PackageTerminal />

        </div>

      </div>
    </section>
  );
}

export default Packages;