import { Box, Button } from "@mui/material";
import InfoPage from "../components/organisms/InfoPage";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box sx={{ flex: 1 }}>
        <InfoPage />
      </Box>

      {/* CTA */}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/chat")}
        >
          New Discussion
        </Button>
      </Box>
    </Box>
  );
}
