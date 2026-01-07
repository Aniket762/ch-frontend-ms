import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextInput from "../atoms/TextInput";
import PrimaryButton from "../atoms/PrimaryButton";

export default function ChatInput({ value, onChange, onSend, disabled }) {
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        pt: 2,
        bgcolor: "#F7F7F8",
      }}
    >
      <TextInput
        placeholder="Ask Combine Health..."
        value={value}
        onChange={onChange}
        onKeyDown={e => e.key === "Enter" && onSend()}
      />
      <PrimaryButton onClick={onSend} disabled={disabled}>
        <SendIcon />
      </PrimaryButton>
    </Box>
  );
}
