import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {


    const result = await productServices.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product Created successfully!",
        data: result
    })
});

const getAllProductFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await productServices.getAllProductIntoDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'PRoducts retrieval successfully',
        data: result,
    });
});

export const productCotroller = {
    createProduct,getAllProductFromDB
}