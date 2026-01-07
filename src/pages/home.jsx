import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import {
  combineHealthContent,
  resultsData,
} from "../utils/combineHealthContent";

export default function Home() {
  const navigate = useNavigate();

  const borderColors = ["#6C63FF", "#F59E0B", "#FB7185", "#22C55E"];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        py: 4,
        background:
          "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      {/* ---------- Hero Section ---------- */}
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <FaRobot size={60} color="#6C63FF" />
        <Typography variant="h3" fontWeight={700}>
          Welcome to Combine Health
        </Typography>
        <Typography variant="h6" color="text.secondary">
          AI-powered Revenue Cycle Management for healthcare leaders
        </Typography>
      </Box>

      {/* ---------- Info Cards ---------- */}
      <Grid container spacing={4}>
        {combineHealthContent.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                borderLeft: `6px solid ${borderColors[index]}`,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 16px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={2}
                >
                  {section.title}
                </Typography>

                {section.points &&
                  section.points.map((point, i) => (
                    <Typography
                      key={i}
                      sx={{ mb: 1 }}
                      color="text.secondary"
                    >
                      • {point}
                    </Typography>
                  ))}

                {section.description && (
                  <Typography color="text.secondary">
                    {section.description}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ---------- Proven Results---------- */}
      <Box
        sx={{
          p: 4,
          borderRadius: 4,
          background: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          mb={4}
        >
          Proven Results
        </Typography>

        <Grid container spacing={3}>
          {resultsData.map((res, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Typography
                  fontSize="0.95rem"
                  fontWeight={700}
                  color="text.secondary"
                  mb={1}
                >
                  {res.label}
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight={700}
                  color={res.color}
                >
                  {res.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ---------- CTA ---------- */}
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Button
          size="large"
          variant="contained"
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: 5,
            fontSize: "1.05rem",
            fontWeight: 600,
            background:
              "black",
            "&:hover": {
              opacity: 0.9,
            },
          }}
          onClick={() => navigate("/chat")}
        >
          New Discussion
        </Button>
      </Box>
    </Box>
  );
}
