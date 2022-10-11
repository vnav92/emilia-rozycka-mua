exports.createPages = async ({ actions, graphql }) => {
  const { data: offerItemData } = await graphql(`
    query SlugsQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "offer-item" } } } }
        }
      ) {
        edges {
          node {
            slug
            offerItem {
              primarytitle
              secondarytitle
              firstitemcontent
              firstitemprice
              firstitemtitle
              seconditemcontent
              seconditemprice
              seconditemtitle
              thirditemcontent
              thirditemprice
              thirditemtitle
              image {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  offerItemData.allWpPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: `offer/${node.slug}`,
      component: require.resolve("./src/templates/offer-item.component.tsx"),
      context: node.offerItem,
    });
  });
};
