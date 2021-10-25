import ListItem, { ListItemProps } from "@mui/material/ListItem";
import { lighten, darken } from "@mui/material/styles";

export interface PartsListItemProps extends ListItemProps {
  alt: boolean;
}

function AltListItem({ alt, sx, ...props }: PartsListItemProps) {
  return (
    <ListItem
      sx={{
        backgroundColor: (theme) => {
          const light = theme.palette.mode === "light";
          const getColour = light ? lighten : darken;
          const colour = light
            ? theme.palette.info.main
            : theme.palette.info.dark;
          const coefficient = alt ? (light ? 0.9 : 0.6) : light ? 0.95 : 0.5;
          return getColour(colour, coefficient);
        },
        ...sx,
      }}
      {...props}
    />
  );
}

export { AltListItem };
