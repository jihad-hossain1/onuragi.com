
import "server-only";
import { cache } from "react";
import { getProductByIdFromDb } from "@/dataServices/product.service";

export const getSingleProduct = cache(getProductByIdFromDb);