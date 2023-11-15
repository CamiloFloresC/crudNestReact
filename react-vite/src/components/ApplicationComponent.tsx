import { Button } from "@mui/material";
import { IApplication } from "../interfaces/Application";
import { dateFormat } from "../utils/dateFormat";
import BasicModal from "./ModalApp";
import { FormAppUpdate } from "./forms/FormAppUpdate";

export const ApplicationComponent = ({
  application,
}: {
  application: IApplication;
}) => {
  return (
    <article className="w-full max-w-sm h-full flex flex-col border-black border-2 rounded-md p-4 gap-3">
      <h2 className="font-bold">{application.name}</h2>
      <span className="font-light">{dateFormat(application.createdAt)}</span>
      <span>
        <span className="font-semibold">grouped:</span>{" "}
        {application.grouped ? "yes" : "none"}
      </span>
      <article className="flex gap-2">
        <span className="font-semibold">Description: </span>
        <span>{application.description}</span>
      </article>
      <article className="flex gap-2">
        <BasicModal
          component={<FormAppUpdate />}
          text="Update Application"
          color={"primary"}
        />
        <Button className="w-[120px]" variant="outlined" color="error">
          Delete
        </Button>
      </article>
    </article>
  );
};
