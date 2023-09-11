import 'server-only';
import { cache } from 'react'

import { getCategoriesFromDatabase } from "@/dataServices/category.services"


export const getCategories = cache(() => getCategoriesFromDatabase());