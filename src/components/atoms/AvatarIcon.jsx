import { Avatar } from "@mui/material";

export default function AvatarIcon({ label, bg }) {
  return (
    <Avatar sx={{ bgcolor: bg, width: 32, height: 32 }}>
      {label}
    </Avatar>
  );
}
