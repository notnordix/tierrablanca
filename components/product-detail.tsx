"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Truck, Minus, Plus, ShoppingBag, Check, ArrowLeft, ArrowRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "")
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "")
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  // For image gallery navigation
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor)
    setIsAddedToCart(true)

    // Reset the "Added to Cart" message after 3 seconds
    setTimeout(() => {
      setIsAddedToCart(false)
    }, 3000)
  }

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "+212643874852"

    // Create a message with product details
    let message = `Bonjour TierraBlanca, je suis intéressé(e) par ce produit:\n\n`
    message += `*${product.name}*\n`
    message += `Prix: ${product.price}\n`

    // Add selected options if any
    if (selectedSize) {
      message += `Taille: ${selectedSize}\n`
    }
    if (selectedColor) {
      message += `Couleur: ${selectedColor}\n`
    }

    message += `\nPouvez-vous me donner plus d'informations?`

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Product Images */}
        <div className="space-y-4">
          {/* Main Image Container */}
          <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
              aria-label="Image précédente"
            >
              <ArrowLeft size={18} className="text-[#415e5a]" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
              aria-label="Image suivante"
            >
              <ArrowRight size={18} className="text-[#415e5a]" />
            </button>

            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-[#415e5a]">
              {selectedImage + 1} / {product.images.length}
            </div>
          </div>

          {/* Thumbnail Images - Improved layout */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleThumbnailClick(index)}
                className={`relative overflow-hidden rounded-lg ${
                  selectedImage === index
                    ? "ring-2 ring-[#415e5a] ring-offset-2"
                    : "ring-1 ring-gray-200 hover:ring-[#415e5a]/50"
                } w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-200 flex-shrink-0`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Vue ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col space-y-6">
          {/* Product Name and Price */}
          <div className="border-b border-gray-100 pb-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Title and price on the same line */}
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#415e5a]">{product.name}</h1>
                <p className="text-xl sm:text-2xl font-medium text-[#415e5a] whitespace-nowrap ml-4">
                  {product.price.replace("€", "MAD")}
                </p>
              </div>
              <p className="text-gray-600 text-base mb-3">{product.shortDescription}</p>
            </motion.div>

            {/* Stock Status - Simplified */}
            <div className="mt-2">
              {product.inStock ? (
                <p className="text-green-600 text-sm flex items-center">
                  <Check size={16} className="mr-1" />
                  En Stock
                </p>
              ) : (
                <p className="text-red-500 text-sm flex items-center">
                  <span className="mr-1">•</span>
                  Rupture de Stock
                </p>
              )}
            </div>
          </div>

          {/* Materials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {product.materials.map((material, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#415e5a]/10 text-[#415e5a]"
              >
                {material}
              </span>
            ))}
          </motion.div>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Taille</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-[#415e5a] text-white border-[#415e5a]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    disabled={!product.inStock}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Couleur</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => {
                  // Map color names to actual color values for the UI
                  const colorMap: Record<string, string> = {
                    White: "#ffffff",
                    Cream: "#f5f5dc",
                    Beige: "#f5f5dc",
                    Gray: "#808080",
                    Black: "#333333",
                    Blue: "#4a90e2",
                    Sage: "#bcb88a",
                    Terracotta: "#e2725b",
                  }

                  const bgColor = colorMap[color] || "#ffffff"

                  return (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? "ring-2 ring-[#415e5a] ring-offset-2" : "ring-1 ring-gray-200"
                      }`}
                      style={{ backgroundColor: bgColor }}
                      aria-label={`Sélectionner la couleur ${color}`}
                      title={color}
                      disabled={!product.inStock}
                    />
                  )
                })}
              </div>
              <p className="text-sm text-gray-500 mt-2">Sélectionné: {selectedColor}</p>
            </div>
          )}

          {/* Product Description - No tabs anymore */}
          <div className="py-4">
            <p className="text-gray-600 text-sm leading-relaxed">{product.fullDescription}</p>
          </div>

          {/* Shipping Information - Restyled */}
          <div className="flex items-center border-l-4 border-[#415e5a] pl-4 py-2">
            <Truck size={18} className="text-[#415e5a] mr-3" />
            <div>
              <p className="font-medium text-[#415e5a]">Livraison Disponible</p>
              <p className="text-xs text-gray-600">Livraison disponible partout au Maroc</p>
            </div>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="pt-4">
            <div className="flex flex-col space-y-4">
              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={!product.inStock}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    disabled={!product.inStock}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button - No heart button */}
              <div>
                <AnimatePresence mode="wait">
                  {isAddedToCart ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full bg-green-100 text-green-800 px-4 py-3 rounded-md flex items-center justify-center"
                    >
                      <Check size={18} className="mr-2" />
                      Ajouté au Panier
                    </motion.div>
                  ) : (
                    <div className="flex gap-2">
                      <motion.button
                        key="add"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className="flex-1 py-3 px-4 bg-[#415e5a] text-white rounded-md flex items-center justify-center hover:bg-[#5a7d79] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <ShoppingBag size={18} className="mr-2" />
                        {product.inStock ? "Ajouter au Panier" : "Rupture de Stock"}
                      </motion.button>

                      <motion.button
                        key="whatsapp"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleWhatsAppInquiry}
                        className="py-3 px-4 bg-green-500 text-white rounded-md flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0"
                          className="text-white mr-2"
                        >
                          <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                            fill="currentColor"
                          />
                        </svg>
                        WhatsApp
                      </motion.button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
