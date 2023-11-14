import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../services/Appications";
import { IApplication } from "../interfaces/Application";
import { Application } from "../components/Application";
import { SubTitle } from "../components/SubTitle";
import { FormApp } from "../components/FormApp";
import BasicModal from "../components/ModalApp";

export const Applications = () => {
  const { data, isLoading } = useQuery({
    queryFn: getApplications,
    queryKey: ["applications"],
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <article className="flex gap-2 p-2 justify-between items-center">
        <SubTitle subtitle="your applications" />
        <BasicModal
          component={<FormApp text="Create Application" />}
          text="Create Application"
          color={"success"}
        />
      </article>
      <section className="grid grid-cols-2 justify-items-center w-full h-full justify-center gap-4 my-4">
        {data?.map((app: IApplication) => {
          return <Application key={app.id} application={app} />;
        })}
      </section>
    </>
  );
};
