import { Box, Typography } from "@mui/material";
import PrimaryButton from "../atoms/PrimaryButton";

export default function ChatHeader({ onNewChat }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h6">Combine Health</Typography>
      <PrimaryButton onClick={onNewChat}>New Discussion</PrimaryButton>
    </Box>
  );
}
