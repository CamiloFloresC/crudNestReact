import { Button, TextField } from "@mui/material";

export const FormGroup = ({ text }: { text: string }) => {
  return (
    <form className="w-full h-full flex flex-col gap-4">
      <h2 className="font-bold">{text}</h2>
      <TextField label="Name" variant="standard" />
      <Button className="w-[120px]" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
};
