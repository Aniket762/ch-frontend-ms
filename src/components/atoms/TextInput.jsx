import { TextField } from "@mui/material";

export default function TextInput(props) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      }}
      {...props}
    />
  );
}
