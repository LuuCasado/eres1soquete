import { createUseStyles } from 'react-jss'

export default createUseStyles({
  footer: {

    "& div.section-social-networks": {
      display: "flex",
      justifyContent: "center"
    },
    "& i.fab.fa-instagram": {
      marginRight: "10px",
      float: "left",
    },
    "& a.instagram-link, & a.facebook-link": {
      color: "gray",
      fontSize: "2rem",
      display: "inline-block",
    },
    "& i.fab.fa-facebook-square": {
      marginLeft: "10px",
      float: "left",
    },

    "& div.section-contact": {
      display: "flex",
      justifyContent: "center"
    },

    "& div.section-payments": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    "& i.fas.fa-credit-card": {
      color: "gray",
      fontSize: "2rem",
      marginRight: "10px"
    },
    "& i.fas.fa-money-bill-wave": {
      color: "gray",
      fontSize: "2rem",
      marginLeft: "10px",
    },
    "& img.mercadopago-logo": {
      width: "7rem",
      marginTop: "1rem"
    },


    "& div.section-shipping": {
      display: "flex",
      flexDirection: "column",
    },
    "& img.delivery-icon": {
      width: "3rem",
      marginTop: "-5px",
      marginBottom: "5px",
      alignSelf: "center"
    },
    "& img.correo-logo": {
      width: "7rem",
      alignSelf: "center"
    },


    "& div.copyright": {
      background: "rgba(148, 148, 148, 0.8)",
      textAlign: "center"
    }
  }
})