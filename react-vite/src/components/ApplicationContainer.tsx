import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../services/Appications";
import { IApplication } from "../interfaces/Application";
import { ApplicationComponent } from "../components/ApplicationComponent";
import { SubTitle } from "../components/SubTitle";
import { FormAppCreate } from "./forms/FormAppCreate";
import BasicModal from "../components/ModalApp";

export const ApplicationContainer = () => {
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
          component={<FormAppCreate />}
          text="Create Application"
          color={"success"}
        />
      </article>
      <section className="flex flex-col sm:flex-row sm:flex-wrap w-full h-full justify-start sm:justify-center justify-items-center items-center gap-4 my-4">
        {data?.map((app: IApplication) => {
          return <ApplicationComponent key={app.id} application={app} />;
        })}
      </section>
    </>
  );
};
