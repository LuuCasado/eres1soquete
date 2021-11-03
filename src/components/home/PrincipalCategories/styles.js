import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    padding: "3rem",

    "& > div": {
      display: "inline-block",
      width: "45%",
      margin: "2.5%",
      backgroundSize: "auto",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "relative",
      boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",

      "&:first-of-type": {
        backgroundImage: 'url("http://localhost:8000/images/medias.jpg")',
      },
      "&:last-of-type": {
        backgroundImage: 'url("http://localhost:8000/images/soquetes.jpg")',
      },

      "&:before": {
        content: '""',
        display: "block",
        width: "100%",
        height: "0",
        paddingTop: "100%"
      },

      "& > div": {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",


        "& h3": {
          fontWeight: "bold",
          color: "white",
          fontSize: "2.5rem",

        },
        "& button": {
          backgroundColor: "#555",
          color: "white",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }
      }
    },

  },
})