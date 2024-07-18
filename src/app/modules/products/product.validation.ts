import { z } from 'zod';

// Define the Zod schema for ProductImage
const ProductImageSchema = z.object({
  id: z.string(),
  image: z.string(),
  imageType: z.string(),
  productsId: z.string().optional()
});

// Define the Zod schema for Brand
const BrandSchema = z.object({
  id: z.string(),
  brandName: z.string(),
  brandImage: z.string(),
});

// Define the Zod schema for Category
const CategorySchema = z.object({
  id: z.string(),
  productCategory: z.string(),
  categoryType: z.string()
});

// Define the Zod schema for Product
const ProductValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    productName: z.string(),
    productImage: z.array(ProductImageSchema),
    productDescription: z.string(),
    auction: z.boolean(),
    price: z.number(),
    brand: BrandSchema,
    drivingPosition: z.string(),
    manufactureCountry: z.string(),
    category: z.string(),
    isDeleted: z.boolean(),
    brandId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
});

export const productValidation = {
  ProductValidationSchema
}