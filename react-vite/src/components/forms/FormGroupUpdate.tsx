import { Button, TextField } from "@mui/material";

export const FormGroupUpdate = () => {
  return (
    <form className="w-full h-full flex flex-col gap-4">
      <h2 className="font-bold">Update Group</h2>
      <TextField label="Name" variant="standard" />
      <Button className="w-[120px]" variant="outlined" color="primary">
        Update
      </Button>
    </form>
  );
};
