exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query SlugsQuery {
      allWpPost(filter: { categories: { nodes: { elemMatch: { name: { eq: "offer-item" }}}}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

data.allWpPost.edges.forEach(({ node }) => {
  actions.createPage({
    path: node.slug,
    component: require.resolve('./src/templates/offer-item.component.tsx')
  })
})
};
