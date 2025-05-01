export interface Product {
  id: number
  name: string
  shortDescription: string
  fullDescription: string
  price: string
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
    name: "Minimalist Tajine",
    shortDescription: "Hand-crafted white clay tajine with elegant design",
    fullDescription:
      "Our signature Minimalist Tajine combines traditional Moroccan craftsmanship with contemporary design. Each piece is meticulously handcrafted from premium white clay sourced from the Atlas Mountains. The natural thermal properties of the clay ensure perfect heat distribution for slow-cooking, while the sleek, minimalist design makes it a stunning centerpiece for any table setting. The glazed interior and unglazed exterior create a beautiful textural contrast that highlights the natural beauty of the material.",
    price: "1200 MAD",
    materials: ["White Clay", "Lead-free Glaze", "Handcrafted"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["White", "Terracotta", "Black"],
    mainImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=2187&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=2187&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567592599149-895a308c24ba?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Artisanal Vase",
    shortDescription: "Elegant white clay vase with minimalist design",
    fullDescription:
      "The Artisanal Vase exemplifies the perfect balance between form and function. Crafted by our master artisans using traditional techniques, each vase features subtle variations that highlight its handmade nature. The pure white clay creates a neutral canvas that complements any floral arrangement or stands beautifully on its own as a sculptural piece. The slightly textured exterior contrasts with the smooth, glazed interior, creating a tactile experience that invites touch and appreciation.",
    price: "850 MAD",
    materials: ["White Clay", "Natural Pigments", "Handcrafted"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["White", "Beige", "Gray", "Black", "Blue"],
    mainImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=2187&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Decorative Plate Set",
    shortDescription: "Set of 4 hand-painted plates with geometric patterns",
    fullDescription:
      "Our Decorative Plate Set features four uniquely designed plates that showcase the geometric patterns traditional to Moroccan artistry. Each plate is individually thrown on a potter's wheel before being hand-painted with our signature minimalist patterns. The subtle color palette and precise linework create a contemporary interpretation of classic Moroccan motifs. Perfect for serving special meals or as wall decor, these versatile pieces bring an element of artisanal luxury to any space.",
    price: "1500 MAD",
    materials: ["White Clay", "Natural Pigments", "Lead-free Glaze"],
    sizes: ["Small", "Medium"],
    colors: ["White", "Cream", "Gray"],
    mainImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-e265c4831d23?q=80&w=2031&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=2070&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Modern Teapot",
    shortDescription: "Contemporary design teapot with minimalist aesthetic",
    fullDescription:
      "The Modern Teapot reimagines the traditional Moroccan teapot with a contemporary silhouette and minimalist aesthetic. Handcrafted from our signature white clay, this teapot combines beauty with functionality. The ergonomic handle and precision spout ensure perfect pouring, while the clay's natural insulating properties keep your tea at the ideal temperature. Each teapot undergoes multiple firings to achieve its distinctive matte finish and exceptional durability, making it both a practical everyday item and an artistic statement piece.",
    price: "950 MAD",
    materials: ["White Clay", "Heat-resistant Glaze", "Handcrafted"],
    sizes: ["Small", "Medium"],
    colors: ["White", "Black", "Sage"],
    mainImage: "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?q=80&w=1974&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567592599149-895a308c24ba?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Ceramic Bowl Set",
    shortDescription: "Set of 3 nesting bowls with organic shapes",
    fullDescription:
      "Our Ceramic Bowl Set consists of three nesting bowls in graduated sizes, each with a slightly organic, asymmetrical form that emphasizes their handcrafted nature. The pure white clay is finished with a semi-matte glaze that highlights the subtle texture of the material. These versatile bowls are perfect for serving everything from soups and salads to desserts, or simply as decorative objects. The set's minimalist design allows it to seamlessly integrate into any table setting or interior style.",
    price: "1100 MAD",
    materials: ["White Clay", "Food-safe Glaze", "Handcrafted"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["White", "Cream", "Gray", "Black"],
    mainImage: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-e265c4831d23?q=80&w=2031&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626753949601-3a6495e1a917?q=80&w=2070&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "Candle Holder",
    shortDescription: "Abstract ceramic candle holder with geometric design",
    fullDescription:
      "The Candle Holder combines functionality with sculptural beauty. Each piece is hand-carved to create a geometric pattern that casts intricate shadows when lit, transforming any space with its ambient glow. The unglazed exterior showcases the natural texture and color of our white clay, while the interior is glazed to reflect and enhance candlelight. This versatile piece works beautifully as a standalone decorative object or as part of a curated collection, adding warmth and artistic flair to any interior.",
    price: "750 MAD",
    materials: ["White Clay", "Hand-carved", "Unglazed Finish"],
    sizes: ["Small", "Medium"],
    colors: ["White", "Beige", "Terracotta"],
    mainImage: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567592599149-895a308c24ba?q=80&w=1974&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 7,
    name: "Decorative Platter",
    shortDescription: "Large serving platter with geometric design",
    fullDescription:
      "The Decorative Platter is a statement piece that elevates any dining experience. With its generous proportions and subtle geometric relief pattern, this platter is perfect for serving and presenting food or as a decorative centerpiece. Each platter is individually formed and finished by hand, ensuring a unique character and exceptional quality. The pure white clay is enhanced with a food-safe glaze that highlights the intricate details while providing a durable, easy-to-clean surface for everyday use or special occasions.",
    price: "1350 MAD",
    materials: ["White Clay", "Food-safe Glaze", "Relief Pattern"],
    sizes: ["Medium", "Large"],
    colors: ["White", "Cream", "Gray", "Black", "Blue"],
    mainImage: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-e265c4831d23?q=80&w=2031&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=2070&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Coffee Mug Set",
    shortDescription: "Set of 4 handcrafted coffee mugs with minimalist design",
    fullDescription:
      "Our Coffee Mug Set combines everyday functionality with artisanal craftsmanship. Each of the four mugs is individually thrown on a potter's wheel, resulting in subtle variations that highlight their handmade nature. The ergonomic handle and perfectly balanced weight make these mugs a pleasure to use, while the pure white clay provides an elegant backdrop for your favorite beverages. The interior features our signature glaze for a smooth, easy-to-clean surface, while the exterior has a slightly textured matte finish that creates a beautiful tactile experience.",
    price: "900 MAD",
    materials: ["White Clay", "Food-safe Glaze", "Handcrafted"],
    sizes: ["Standard"],
    colors: ["White", "Black", "Gray", "Sage", "Terracotta"],
    mainImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567592599149-895a308c24ba?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
    ],
    inStock: true,
  },
  {
    id: 9,
    name: "Olive Oil Dispenser",
    shortDescription: "Elegant ceramic oil dispenser with pouring spout",
    fullDescription:
      "The Olive Oil Dispenser combines beauty and functionality in a vessel designed for everyday use. The sleek silhouette and precision pouring spout ensure drip-free serving, while the handcrafted white clay body provides excellent insulation to protect oils from light and heat. Each dispenser features a subtle texture that enhances grip and adds visual interest, complemented by our signature matte finish. The minimalist design makes this piece a versatile addition to any kitchen, elegant enough for table service yet practical for daily use.",
    price: "650 MAD",
    materials: ["White Clay", "Food-safe Glaze", "Handcrafted"],
    sizes: ["Small", "Medium"],
    colors: ["White", "Cream", "Black"],
    mainImage: "https://images.unsplash.com/photo-1626753949601-3a6495e1a917?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626753949601-3a6495e1a917?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-e265c4831d23?q=80&w=2031&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2070&auto=format&fit=crop",
    ],
    inStock: false,
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}
