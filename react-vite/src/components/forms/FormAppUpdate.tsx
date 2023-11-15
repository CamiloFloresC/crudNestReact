import { Button, TextField } from "@mui/material";

export const FormAppUpdate = () => {
  return (
    <form className="w-full h-full flex flex-col gap-4">
      <h2 className="font-bold">Update Application</h2>
      <TextField label="Name" variant="standard" />
      <TextField label="Description" variant="standard" />
      <Button className="w-[120px]" variant="outlined" color="primary">
        Update
      </Button>
    </form>
  );
};
