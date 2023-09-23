import "server-only";
import { cache } from "react";
import { getProductsFromDb } from "@/dataServices/products.services";




export const getProducts = cache(getProductsFromDb)

