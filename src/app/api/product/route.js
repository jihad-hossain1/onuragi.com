// import DbConnect from "@/dataServices/DbConnect";

import DbConnect from "@/dataServices/DbConnect";
import { getProductsFromDb } from "@/dataServices/products.services";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        const cookie = request.cookies.get("cart")?.value;
        if (!cookie) return NextResponse.json({ cart: [] });
        const cartObj = JSON.parse(cookie);
        const products = await getProductsFromDb(Object.keys(cartObj));
        const cart = products.map((product) => {
            return {
                ...product,
                quantity: cartObj[product._id.toString()],
            };
        });
        return NextResponse.json({ cart });
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            {
                status: 500,
            }
        );
    }
};