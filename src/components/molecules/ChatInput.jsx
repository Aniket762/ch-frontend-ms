import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextInput from "../atoms/TextInput";
import PrimaryButton from "../atoms/PrimaryButton";

export default function ChatInput({ value, onChange, onSend, disabled }) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
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
