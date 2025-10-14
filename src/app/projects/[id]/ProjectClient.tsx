"use client";

import { useState } from "react";
import Projectheader from "@/app/projects/Projectheader";
import Board from "../BoardVeiw";
import List from "../ListView";
import Tilmeline from "../TimelineView";
import Table from "../Tableview";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  id: string;
};

const ProjectClient = ({ id }: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <Projectheader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Tilmeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default ProjectClient;
