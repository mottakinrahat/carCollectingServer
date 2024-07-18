import { ObjectId } from 'mongodb'; // Import for clarity

// ProductImage
export interface ProductImage {
  id: ObjectId;
  image: string;
  imageType: string;
  productsId?: ObjectId; // Optional for one-to-one or one-to-many relationship
  Products?: TProducts; // Reference to Products model (if using one-to-one)
}

// Brand
export interface Brand {
  id: ObjectId;
  brandName: string;
  Products?: TProducts[]; // Array of Products (if using one-to-many)
}

// carStatusEnum (recommended for consistency)
enum carStatusEnum {
  pending = 'pending',
  live = 'live',
  sold = 'sold',
}

// categoryEnum (recommended for consistency)
enum categoryEnum {
  weeklyHighlights = 'weeklyHighlights',
  supercars = 'supercars',
  jdmLeagends = 'jdmLeagends',
  airCoooled = 'airCoooled',
  offRoadExplorer = 'offRoadExplorer',
  twoWheels = 'twoWheels',
}

// Products
export interface TProducts {
  id: ObjectId;
  productName: string;
  productImage?: ProductImage[]; // Array of ProductImage (if using one-to-many)
  ProductDescription: string;
  auction: boolean;
  price: number;
  brandId: ObjectId;
  brand?: Brand; 
  drivingPosition: string;
  ManufactureCountry: string;
  status: carStatusEnum; 
  category: categoryEnum; 
  createdAt: Date;
  updatedAt: Date;
}
