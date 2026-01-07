import { Box, Typography } from "@mui/material";

export default function StatCard({ value, label, color }) {
  return (
    <Box
      sx={{
        minWidth: 200,
        p: 2.5,
        borderRadius: 3,
        bgcolor: "#FFFFFF",
        borderTop: `4px solid ${color}`,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color, mb: 0.5 }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        {label}
      </Typography>
    </Box>
  );
}
