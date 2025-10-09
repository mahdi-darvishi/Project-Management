import ProjectClient from "./ProjectClient";

type Props = {
  params: { id: string };
};

const ProjectPage = async ({ params }: Props) => {
  const { id } = await params;

  return <ProjectClient id={id} />;
};

export default ProjectPage;
