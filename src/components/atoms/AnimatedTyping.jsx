import { Box } from "@mui/material";

export default function AnimatedTyping() {
  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      {[0, 1, 2].map(i => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 6,
            bgcolor: "text.secondary",
            borderRadius: "50%",
            animation: "pulse 1.4s infinite",
            animationDelay: `${i * 0.2}s`,
            "@keyframes pulse": {
              "0%": { opacity: 0.3 },
              "50%": { opacity: 1 },
              "100%": { opacity: 0.3 },
            },
          }}
        />
      ))}
    </Box>
  );
}
