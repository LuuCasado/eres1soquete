import { createUseStyles } from 'react-jss'

export default createUseStyles({
  siderBackground: {
    position: "fixed",
    background: "rgba(9, 30, 66, 0.54) none repeat scroll 0% 0%",
    inset: "0",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 0.5s",
    transitionTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)"
  },

  siderContent: {
    padding: "20px 0px",
    backgroundColor: "white",
    height: "100vh",
    position: "absolute",
    right: "0",
    width: "0",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    background: "#f0f0f0",
    boxShadow: "0 0 0 #cccccc, 0 0 0 #ffffff, 10px 10px 10px #cccccc inset, -10px -10px 10px #ffffff inset",
    transition: "width 0.5s",
    transitionTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)",
    "& i.far.fa-times-circle": {
      position: "absolute",
      top: "12px",
      left: "15px",
      fontSize: "1.5rem",
      cursor: "pointer"
    }
  },

  siderProductListContainer: {
    height: "calc(100vh - 1em - 64px)",
    overflow: "scroll"
  },

  siderEmptyContainer: {
    height: "calc(100 % - 7rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },


  siderOpen: {
    pointerEvents: "all",
    opacity: "1",
    "& $siderContent": {
      "@media (min-width: 0px) and (max-width: 768px)": {
        width: "100vw"
      },
      "@media(min-width: 769px) and (max-width: 1399px)": {
        width: "30vw",
      },
      "@media(min-width: 1400px)": {
        width: "25vw",

      },
    },
  },

  siderTitle: {
    alignSelf: "baseline",
  }
});