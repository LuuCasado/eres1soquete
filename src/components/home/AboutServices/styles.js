import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5rem"
  },
  title: {},

  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    "& .vertical-divider": {
      height: "100%",
      position: "absolute",
      right: "0",
      borderColor: "black"
    }
  },
  service: {
    flexDirection: "column",
    alignItems: "center",
    display: "inline-flex",
    width: "calc(100% - 17px)",

    "& $title": {
      fontSize: "1.2rem",
      marginTop: "0.5rem"
    },

    "& i": {
      fontSize: "2rem"

    }
  }
})