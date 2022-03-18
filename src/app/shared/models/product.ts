export interface Product {
  [x: string]: any
  id: number,
  name: string,
  sku: string,
  reference: string,
  url: string,
  variant_id: number,
  product_image: {
    id: number,
    fileable_type: string,
    product_id: number,
    variant_id: {},
    presentation: {
        sv: string
    },
    position: number,
    media_file_id: number,
    options: {},
    url: string
  },
  published_content: {
    sv: {
      table: {
        name: string,
        description: string,
        short_description: string
      }
    }
  },
  country_affinity: {},
  product_relations: [],
  product_properties: []
}