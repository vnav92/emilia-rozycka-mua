require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Emilia Różycka Make Up Artist`,
    author: "Artur Tuchowski & Mateusz Jankowski",
    description: "Emilia Różycka Make Up Artist - makijażystka Gdańsk, Trójmiasto, woj. Pomorskie. Makijaż ślubny, okolicznościowy, biznesowy, do sesji zdjęciowych. Lekcje makijażu, szkolenia.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia Różycka Make Up Artist`,
        short_name: `MUA`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/graphics/logo/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Specify the URL of the WordPress source
        url: process.env.WORDPRESS_API_URL,
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // Specify which URL structures to fetch
        includedRoutes: ["**/posts", "**/tags", "**/categories"],
      },
    },
  ],
};
