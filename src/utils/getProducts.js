import 'server-only';
import { getProductsFromDb } from "@/dataServices/product.service";

import { cache } from 'react';


export const getProducts = cache(getProductsFromDb) 