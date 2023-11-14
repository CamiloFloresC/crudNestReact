import { Button, TextField } from "@mui/material";

export const FormApp = ({ text }: { text: string }) => {
  return (
    <form className="w-full h-full flex flex-col gap-4">
      <h2 className="font-bold">{text}</h2>
      <TextField label="Name" variant="standard" />
      <TextField label="Description" variant="standard" />
      <Button className="w-[120px]" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
};
