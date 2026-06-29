import { useState } from "react";
import { motion } from "framer-motion";

import AppIcon from "./AppIcon";
import AppDetailsModal from "./AppDetailsModal";

function MobileAppGrid({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-x-5 gap-y-8 md:hidden"
      >
        {projects.map((project) => (
          <AppIcon
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      <AppDetailsModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default MobileAppGrid;