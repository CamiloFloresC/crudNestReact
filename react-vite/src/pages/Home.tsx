import { useQuery } from "@tanstack/react-query";
import { Application } from "../components/Application";
import { IApplication } from "../interfaces/Application";
import { getApplications } from "../services/Appications";
import { SubTitle } from "../components/SubTitle";
import { getGroups } from "../services/Group";
import { IGroup } from "../interfaces/Group";
import { GroupComponent } from "../components/Group";
import BasicModal from "../components/ModalApp";
import { FormApp } from "../components/FormApp";
import { FormGroup } from "../components/FormGroup";

export const Home = () => {
  const { data: dataApplication } = useQuery({
    queryFn: getApplications,
    queryKey: ["applications"],
  });
  const { data: dataGroup } = useQuery({
    queryFn: getGroups,
    queryKey: ["groups"],
  });
  return (
    <main>
      <section>
        <section>
          <article className="flex gap-2 p-2 justify-between items-center">
            <SubTitle subtitle="your applications" />
            <BasicModal
              component={<FormApp text="Create Application" />}
              text=" create Application"
              color={"success"}
            />
          </article>
          <article className="grid grid-cols-2 justify-items-center w-full h-full justify-center gap-4 mt-4">
            {dataApplication?.map((app: IApplication) => {
              return <Application key={app.id} application={app} />;
            })}
          </article>
        </section>
        <hr className="my-4 mx-2" />
        <section>
          <article className="flex gap-2 p-2 justify-between items-center">
            <SubTitle subtitle="your groups" />
            <BasicModal
              component={<FormGroup text="Create Group" />}
              text="Create Group"
              color={"success"}
            />
          </article>
          <section className="grid grid-cols-2 justify-items-center w-full h-full justify-center gap-4 mt-4 my-4">
            {dataGroup?.map((group: IGroup) => {
              return <GroupComponent key={group.id} group={group} />;
            })}
          </section>
        </section>
      </section>
      <aside></aside>
    </main>
  );
};
