
export interface ProductType {
    id: number,
    images: string,
    title: string,
    description: string,
    ratings: Reviews[],
    price: number
    category: string,

}
export interface Reviews {
    rating: number
}