import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)<{ error?: boolean }>((props) => {
  if (props.error) {
    return {
      backgroundColor: props.theme.palette.error.main,
      color: props.theme.palette.primary.contrastText,
    };
  }
});

export { StyledButton };
