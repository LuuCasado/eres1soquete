import { createUseStyles } from 'react-jss'

export default createUseStyles({

  shipping: {
    display: "flex",
    flexDirection: "column",

    "& i": {
      marginRight: "5px"
    },

    "& > div": {
      display: "flex",
      alignItems: "center",

      "& > p": {
        fontSize: "1rem",
        marginBottom: "5px"
      },
    },

    "& > a": {
      color: "grey",
      "&:hover": {
        color: "#f29cdd",
      }
    },
    "& input": {
      marginRight: "10px"
    },
  },
  inputContainer: {
    marginTop: "15px",
    marginBottom: "15px"
  },
});