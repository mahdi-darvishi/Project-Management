"use client";

import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import { useGetProjectsQuery } from "@/state/api";
import { DisplayOption, Gantt, ViewMode, Task } from "gantt-task-react";
import React, { useMemo, useState } from "react";
import "gantt-task-react/dist/index.css";

type TaskTypeItems = "task" | "milestone" | "project";

// ✅ Memoized version of Gantt to avoid unnecessary re-renders
const MemoizedGantt = React.memo(Gantt);

const Timeline = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  // ✅ Keep view mode and locale in state
  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US",
  });

  // ✅ Generate tasks only when `projects` changes
  const ganttTasks: Task[] = useMemo(() => {
    if (!projects) return [];
    return projects.map((project) => ({
      start: new Date(project.startDate as string),
      end: new Date(project.endDate as string),
      name: project.name,
      id: `Project-${project.id}`,
      type: "project" as TaskTypeItems,
      progress: 50,
      isDisabled: false,
    }));
  }, [projects]);

  // ✅ Derived display options for the Gantt chart, memoized to prevent re-renders
  const ganttOptions = useMemo(
    () => ({
      columnWidth: displayOptions.viewMode === ViewMode.Month ? 150 : 100,
      listCellWidth: "100px",
      projectBackgroundColor: isDarkMode ? "#101214" : "#1f2937",
      projectProgressColor: isDarkMode ? "#1f2937" : "#aeb8c2",
      projectProgressSelectedColor: isDarkMode ? "#000" : "#9ba1a6",
    }),
    [displayOptions.viewMode, isDarkMode],
  );

  // ✅ Handle dropdown change to update view mode
  const handleViewModeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newMode = event.target.value as ViewMode;
    setDisplayOptions((prev) => ({
      ...prev,
      viewMode: newMode,
    }));
  };

  // ✅ Basic loading & error states
  if (isLoading) return <div>Loading...</div>;
  if (isError || !projects)
    return <div>An error occurred while fetching projects</div>;

  return (
    <div className="max-w-full p-8">
      {/* Header section */}
      <header className="mb-4 flex items-center justify-between">
        <Header name="Projects Timeline" />
        <div className="relative inline-block w-64">
          <select
            className="focus:shadow-outline dark:border-dark-secondary dark:bg-dark-secondary block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:text-white"
            value={displayOptions.viewMode}
            onChange={handleViewModeChange}
          >
            <option value={ViewMode.Day}>Day</option>
            <option value={ViewMode.Week}>Week</option>
            <option value={ViewMode.Month}>Month</option>
          </select>
        </div>
      </header>

      {/* Gantt chart section */}
      <div className="dark:bg-dark-secondary overflow-hidden rounded-md bg-white shadow dark:text-white">
        <div className="timeline">
          <MemoizedGantt
            tasks={ganttTasks}
            {...displayOptions}
            {...ganttOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
