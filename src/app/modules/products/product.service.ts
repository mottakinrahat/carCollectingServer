import prisma from "../../../shared/prisma";

const createProductIntoDB = async (payload:any) => {
  try {
    const result = await prisma.products.create({
      data: {
        productName: payload.productName,
        ProductDescription: payload.productDescription,
        auction: payload.auction,
        price: payload.price,
        brandId: payload.brandId,
        drivingPosition: payload.drivingPosition,
        ManufactureCountry: payload.manufactureCountry,
        category: payload.category,
        isDeleted: false, // Assuming this is a default value
      },
    });
    return result;
  } catch (error) {
    throw new Error(`Could not create product: ${error.message }`);
  }
};
const getAllProductIntoDB = async () => {
  try {
    const result = await prisma.products.findMany();
    return result;
  } catch (error) {
    throw new Error(`Could not get product: ${error.message }`);
  }
};

export const productServices= { createProductIntoDB ,getAllProductIntoDB};
