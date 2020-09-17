import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  palette: {
    text: {
      primary: "rgb(85,85,85)",
    },
  },
});

export default theme;
