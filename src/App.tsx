import { List } from "@mui/material";
// import { StyledListItem } from "./StyledListItem";
import { AltListItem } from "./AltListItem";
import { StyledButton } from "./StyledButton";

const countries = ["England", "Wales", "Scotland", "Northern Ireland"];

function App() {
  return (
    <>
      <StyledButton error>Test</StyledButton>

      {/* <List>
        {countries.map((country, index) => (
          <StyledListItem key={index} alt={Boolean(index % 2)}>
            {country}
          </StyledListItem>
        ))}
      </List> */}

      <List>
        {countries.map((country, index) => (
          <AltListItem key={index} alt={Boolean(index % 2)}>
            {country}
          </AltListItem>
        ))}
      </List>
    </>
  );
}

export default App;
