import { getProducts } from "@/utils/getProducts"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {

        const products = await getProducts()
        return NextResponse.json({ message: 'OK', products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }

}

export const POST = async (request) => {
    const body = await request.json()
    // console.log(request.cookies, request.headers)
    db.products.push(body)
    return NextResponse.json({
        message: "Product added successfull"
    })
}