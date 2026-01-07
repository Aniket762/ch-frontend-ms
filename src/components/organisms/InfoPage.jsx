import { Box, Typography, Grid } from "@mui/material";
import { combineHealthContent, resultsData } from "../../utils/combineHealthContent";
import StatCard from "../molecules/StatCard";

const BORDER_COLORS = ["#6C63FF", "#F59E0B", "#FB7185", "#22C55E"];

export default function InfoPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "100%"
      }}
    >
      {/* ================= HERO ================= */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Combine Health
        </Typography>

        <Typography
          sx={{
            mt: 1,
            maxWidth: 620,
            mx: "auto",
            color: "text.secondary"
          }}
        >
          Intelligent Revenue Cycle Management, powered by explainable AI
        </Typography>
      </Box>

      {/* ================= FEATURE CARDS ================= */}
      <Grid container spacing={4}>
        {combineHealthContent.map((section, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 3,
                bgcolor: "#ffffff",
                borderLeft: `5px solid ${
                  BORDER_COLORS[index % BORDER_COLORS.length]
                }`,
                boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 32px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 600 }}>
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
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ================= RESULTS ================= */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 3,
            position: "relative",
            display: "inline-block",
            mx: "auto"
          }}
        >
          Results we’re proud of
        </Typography>

        <Grid container spacing={3}>
          {resultsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
