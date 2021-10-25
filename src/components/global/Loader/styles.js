import { createUseStyles } from 'react-jss'

export default createUseStyles({
  loader: {
    position: "relative",
    display: "block",
    margin: "auto",
    height: "64px",
    width: "64px",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1) inset, 0 0 25px rgba(0, 0, 255, 0.075)",
    "&:after": {
      content: "",
      position: "relative",
      top: "15%",
      left: "15%",
      display: "block",
      height: "70%",
      width: "70%",
      background: "none repeat scroll 0 0 #f2f2f2",
      borderRadius: "50%",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    "& > span": {
      position: "absolute",
      height: "100%",
      width: "50%",
      overflow: "hidden",
    },
    "& > $left": {
      left: "0"
    },
    "& > $right": {
      left: "50%"
    },
    "& > $left > $anim, & > $right > $anim": {
      position: "absolute",
      left: "100%",
      top: "0",
      height: "100%",
      width: "100%",
      borderRadius: "999px",
      background: "none repeat scroll 0 0 #508ec3",
      animation: "loader-rotate 3s infinite",
      opacity: "0.8",
      transformOrigin: "0 50% 0",
    },
    "& > $left > $anim": {
      borderBottomLeftRadius: "0",
      borderTopLeftRadius: "0"
    },
    "& > $right > $anim": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
      left: "-100%",
      transformOrigin: "100% 50% 0"
    },
  },

  left: {},
  right: {},
  anim: {},
})