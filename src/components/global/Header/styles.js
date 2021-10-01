import { createUseStyles } from 'react-jss'

export default createUseStyles({
  logo: {
    width: "5rem",
    height: "5rem",
    marginRight: "0.5rem",
  },

  header: {
    "& .ant-menu li": {
      height: "100 %",
      display: "flex",
      alignItems: "center",
    },
    "& .cart-icon": {
      width: "1.5rem",
      fill: "white",
      cursor: "pointer",
      marginLeft: "1rem",
    },
    "& .left-aligned-icons": {
      display: "flex",
    },
    "& .right-aligned-icons": {
      display: "flex",
      alignSelf: "flex-end",
      height: "100%"
    },
    "&.ant-layout-header, & .ant-menu": {
      position: "relative",
      background: "#b99cf0!important",
      height: "80px",
      display: "flex",
      justifyContent: "space-between",
    },
    "& .ant-menu li.ant-menu-item:hover, & .ant-menu.ant-menu-dark .ant-menu-item-selected": {
      backgroundColor: "#f29cdd"
    }
  }


});