import { Box, Typography } from "@mui/material";

export default function EmptyState() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "text.secondary",
        animation: "fadeIn 0.6s ease",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
        Combine Health
      </Typography>
      <Typography variant="body2">
        Ask anything about your health policies
      </Typography>
    </Box>
  );
}
