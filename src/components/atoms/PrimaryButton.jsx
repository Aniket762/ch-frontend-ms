import { Button } from "@mui/material";

export default function PrimaryButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 2,
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
