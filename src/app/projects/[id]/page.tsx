"use client";

import { useState } from "react";

import Projectheader from "@/app/projects/Projectheader";

type Props = {
  params: { id: string };
};
const Project = ({ params }: Props) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      {/* MODAL NEW TASK */}

      <Projectheader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab ==="Board" &&(
        <Board/>
      )} */}
    </div>
  );
};

export default Project;
