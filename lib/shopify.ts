// lib/shopify.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<{ data: T }> {
  const res = await fetch(`https://${domain}/api/2024-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Error fetching data from Shopify: ${res.statusText}`);
  }

  return res.json();
}

const GET_ALL_PRODUCTS_QUERY = `
  query getProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;

export async function getAllProducts() {
  const { data } = await shopifyFetch<{
    products: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          handle: string;
          priceRange: {
            minVariantPrice: {
              amount: string;
              currencyCode: string;
            };
          };
          featuredImage: {
            url: string;
            altText: string;
          } | null;
        };
      }>;
    };
  }>({
    query: GET_ALL_PRODUCTS_QUERY,
  });

  return data.products.edges.map((edge) => edge.node);
}