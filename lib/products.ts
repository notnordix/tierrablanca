// Update the Product interface to include price information for each size
export interface Product {
  id: number
  name: string
  shortDescription: string
  fullDescription: string
  price: string // Default price (for backward compatibility)
  prices?: Record<string, string> // Map of size to price
  materials: string[]
  sizes: string[]
  colors: string[]
  mainImage: string
  images: string[]
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "A R A B I C A",
    shortDescription: "Tajine avec design moderne",
    fullDescription:
      "Ces tajines en argile blanche, revisités dans un design épuré, allient esthétique contemporaine et savoir-faire artisanal. Façonnés à la main, ils sont aussi beaux que fonctionnels: idéals pour sublimer vos plats et décorer votre table avec caractère et élégance. Un hommage au terroir, dans une version résolument moderne.",
    price: "190 MAD", // Default to Moyen price
    prices: {
      Grand: "290 MAD",
      Moyen: "190 MAD",
      Petit: "140 MAD",
      "Très petit": "110 MAD",
    },
    materials: ["Argile blanche"],
    sizes: ["Grand", "Moyen", "Petit", "Très petit"],
    colors: ["White"],
    mainImage: "/products/p1/1.jpeg",
    images: [
      "/products/p1/1.jpeg",
      "/products/p1/2.jpeg",
      "/products/p1/3.jpeg",
      "/products/p1/4.jpeg",
      "/products/p1/5.jpeg",
    ],
    inStock: true,
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}
