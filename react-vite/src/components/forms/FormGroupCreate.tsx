import { Button, TextField } from "@mui/material";

export const FormGroupCreate = () => {
  return (
    <form className="w-full h-full flex flex-col gap-4">
      <h2 className="font-bold">Create Group</h2>
      <TextField label="Name" variant="standard" />
      <Button className="w-[120px]" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
};
