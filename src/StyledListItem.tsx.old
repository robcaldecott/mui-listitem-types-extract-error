import ListItem from "@mui/material/ListItem";
import { styled, lighten, darken } from "@mui/material/styles";

/**
 * Attempting to extract types from this file will cause a TS4023 error.
 */
const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "alt",
})<{ alt: boolean }>(({ alt, theme }) => {
  const light = theme.palette.mode === "light";
  const getColour = light ? lighten : darken;
  const colour = light ? theme.palette.info.main : theme.palette.info.dark;
  const coefficient = alt ? (light ? 0.9 : 0.6) : light ? 0.95 : 0.5;
  return {
    backgroundColor: getColour(colour, coefficient),
  };
});

export { StyledListItem };
