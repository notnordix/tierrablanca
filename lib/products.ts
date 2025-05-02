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
  {
    id: 2,
    name: "N A T U R A",
    shortDescription: "Vases décoratifs en argile blanche",
    fullDescription:
      "Élégance et authenticité se retrouvent dans ces vases décoratifs en argile blanche, modelés à la main avec une attention particulière aux détails. Leur teinte claire et naturelle s'intègre harmonieusement à tous les styles d'intérieur, du plus épuré au plus contemporain. Des pièces uniques, façonnées avec passion, prêtes à donner du caractère et de la douceur à votre espace.",
    price: "600 MAD",
    materials: ["Argile blanche lisse"],
    sizes: ["Standard"],
    colors: ["White"],
    mainImage: "/products/p2/1.jpeg",
    images: ["/products/p2/1.jpeg", "/products/p2/2.jpeg", "/products/p2/3.jpeg", "/products/p2/4.jpeg","/products/p2/5.jpeg"],
    inStock: true,
  },
  {
    id: 3,
    name: "F L O R I A",
    shortDescription: "Vases décoratifs en argile blanche",
    fullDescription:
      "Façonné dans une argile blanche douce et pure, ce vase moderne capte la lumière et apaise les espaces. Chaque pièce est unique, comme un souffle de calme posé dans votre intérieur.",
    price: "240 MAD",
    materials: ["Argile blanche lisse"],
    sizes: ["Standard"],
    colors: ["White"],
    mainImage: "/products/p3/1.jpeg",
    images: ["/products/p3/1.jpeg", "/products/p3/2.jpeg", "/products/p3/3.jpeg"],
    inStock: true,
  },
  {
    id: 4,
    name: "S E P I A",
    shortDescription: "Vases décoratifs en argile blanche",
    fullDescription:
      "Chaleur de la terre, éclat de la couleur. Ce vase blanc en argile blanche, au design contemporain, est entièrement façonné à la main. Sa teinte lumineuse et sa silhouette minimaliste en font une pièce idéale pour sublimer un intérieur moderne, naturel ou épuré. Un objet décoratif unique, qui allie finesse artisanale et élégance intemporelle.",
    price: "180 MAD",
    materials: ["Argile blanche lisse"],
    sizes: ["Standard"],
    colors: ["White"],
    mainImage: "/products/p4/1.jpeg",
    images: ["/products/p4/1.jpeg", "/products/p4/2.jpeg", "/products/p4/3.jpeg", "/products/p4/4.jpeg", "/products/p4/5.jpeg"],
    inStock: true,
  },
  {
    id: 5,
    name: "A Z U R A",
    shortDescription: "Assiette en argile blanche",
    fullDescription:
      "Simplicité et raffinement s'unissent dans ces assiettes en argile blanche, entièrement façonnées à la main. Leur finition douce et naturelle sublime chaque plat, du plus quotidien au plus raffiné. Des pièces uniques qui apportent une touche artisanale et chaleureuse à votre table.",
    price: "130 MAD", // Default to Moyen price
    prices: {
      Grand: "180 MAD",
      Moyen: "130 MAD",
      Petit: "100 MAD",
    },
    materials: ["Argile blanche lisse"],
    sizes: ["Grand", "Moyen", "Petit"],
    colors: ["White"],
    mainImage: "/products/p5/1.jpeg",
    images: ["/products/p5/1.jpeg", "/products/p5/2.jpeg", "/products/p5/3.jpeg", "/products/p5/4.jpeg", "/products/p5/5.jpeg"],
    inStock: true,
  },
  {
    id: 6,
    name: "N E O R A",
    shortDescription: "Saladier en argile blanche",
    fullDescription:
      "Sobriété et authenticité s'invitent à votre table avec ce saladier en argile blanche, façonné à la main avec soin. Sa texture douce et sa teinte naturelle mettent en valeur vos préparations tout en apportant une touche artisanale à votre décoration. Une pièce unique, entre fonctionnalité et esthétisme.",
    price: "130 MAD", // Default to Moyen price
    prices: {
      Grand: "180 MAD",
      Moyen: "130 MAD",
      Petit: "100 MAD",
    },
    materials: ["Argile blanche lisse"],
    sizes: ["Grand", "Moyen", "Petit"],
    colors: ["White"],
    mainImage: "/products/p6/1.jpeg",
    images: ["/products/p6/1.jpeg", "/products/p6/2.jpeg", "/products/p6/3.jpeg", "/products/p6/4.jpeg"],
    inStock: true,
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}
