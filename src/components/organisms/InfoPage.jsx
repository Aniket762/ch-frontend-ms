import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { combineHealthContent, resultsData } from "../../utils/combineHealthContent";
import StatCard from "../molecules/StatCard";

const MotionBox = motion(Box);

const BORDER_COLORS = ["#6C63FF", "#F59E0B", "#FB7185", "#22C55E"];

export default function InfoPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
        px: { xs: 2, md: 6 },
        pt: 6
      }}
    >
      {/* ================= HERO ================= */}
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        textAlign="center"
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            background: "linear-gradient(90deg, #1976d2, #9c27b0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Combine Health
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            maxWidth: 640,
            mx: "auto",
            color: "text.secondary",
            fontSize: "1.05rem"
          }}
        >
          Intelligent Revenue Cycle Management, powered by explainable AI
        </Typography>
      </MotionBox>

      {/* ================= FEATURE CARDS ================= */}
      <Grid container spacing={4}>
        {combineHealthContent.map((section, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 4,
                bgcolor: "#ffffff",
                borderLeft: `5px solid ${BORDER_COLORS[index % BORDER_COLORS.length]}`,
                boxShadow: "0 12px 30px rgba(0,0,0,0.07)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.1)"
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 700 }}>
                {section.title}
              </Typography>

              {section.points ? (
                section.points.map((point, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 0.8,
                      lineHeight: 1.6
                    }}
                  >
                    • {point}
                  </Typography>
                ))
              ) : (
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  {section.description}
                </Typography>
              )}
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* ================= RESULTS ================= */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 4
          }}
        >
          Results we’re proud of
        </Typography>

        <Grid container spacing={3}>
          {resultsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <StatCard {...stat} />
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  );
}
