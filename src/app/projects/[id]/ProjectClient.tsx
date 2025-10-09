"use client";

import { useState } from "react";
import Projectheader from "@/app/projects/Projectheader";
import Board from "../BoardVeiw";

type Props = {
  id: string;
};

const ProjectClient = ({ id }: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      {/* MODAL NEW TASK */}
      <Projectheader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModelNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default ProjectClient;
