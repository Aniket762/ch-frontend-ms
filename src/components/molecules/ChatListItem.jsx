import { Box, Typography } from "@mui/material";

export default function ChatListItem({ label, icon, pinned }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 1,
        borderRadius: 1,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#1f2937" },
        fontWeight: pinned ? 600 : 400
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
}
