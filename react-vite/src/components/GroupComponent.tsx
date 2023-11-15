import { Button } from "@mui/material";
import { IApplication } from "../interfaces/Application";
import { IGroup } from "../interfaces/Group";
import BasicModal from "./ModalApp";
import { FormGroupUpdate } from "./forms/FormGroupUpdate";

export const GroupComponent = ({ group }: { group: IGroup }) => {
  return (
    <section className="w-full max-w-2xl h-full flex flex-col border-black border-2 rounded-md p-4 gap-3 justify-between">
      <h2 className="font-bold text-lg">{group.name}</h2>
      <section className="h-[150px] scroll-auto">
        {group.applications.map((app: IApplication) => {
          return (
            <article key={app.id}>
              <article className="flex gap-2">
                <span className="font-semibold">Name: </span>
                <span>{app.name}</span>
              </article>
              <article className="flex gap-2">
                <span className="font-semibold">Description: </span>
                <span>{app.description}</span>
              </article>
            </article>
          );
        })}
      </section>
      <article className="flex gap-2">
        <BasicModal
          component={<FormGroupUpdate />}
          text="Update Group"
          color={"primary"}
        />
        <Button className="w-[120px]" variant="outlined" color="error">
          Delete
        </Button>
      </article>
    </section>
  );
};
