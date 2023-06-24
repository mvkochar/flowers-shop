type TProduct = {
    id: number;
    image: string;
    title: string;
    price: number;
    isSale: boolean;
    sale?: number;
    currentPrice: number;
    isFrom: boolean;
}

export const ProductsArr: TProduct[] = [
    {
        id: 1,
        image: 'images/catalog/product1.png',
        title: '45 red roses',
        price: 150,
        isSale: false,
        currentPrice: 150,
        isFrom: false
    },

    {
        id: 2,
        image: 'images/catalog/product2.png',
        title: 'Annet (white dahlias)',
        price: 245,
        isSale: false,
        currentPrice: 245,
        isFrom: false
    },

    {
        id: 3,
        image: 'images/catalog/product3.png',
        title: 'Garden roses in a bouquets',
        price: 120,
        isSale: false,
        currentPrice: 120,
        isFrom: true
    },

    {
        id: 4,
        image: 'images/catalog/product4.png',
        title: 'Cristal (pink carnations with mix flowers)',
        price: 375,
        isSale: true,
        currentPrice: 225,
        sale: 40,
        isFrom: false
    },

    {
        id: 5,
        image: 'images/catalog/product5.png',
        title: 'Milana (bouquet with garden roses)',
        price: 305,
        isSale: true,
        currentPrice: 270,
        sale: 25,
        isFrom: false
    },

    {
        id: 6,
        image: 'images/catalog/product6.png',
        title: 'Diamond bouquet pink roses',
        price: 305,
        isSale: true,
        currentPrice: 150,
        sale: 50,
        isFrom: false,
    },

    {
        id: 7,
        image: 'images/catalog/product7.png',
        title: '45 red roses',
        price: 150,
        isSale: false,
        currentPrice: 150,
        isFrom: false
    },

    {
        id: 8,
        image: 'images/catalog/product8.png',
        title: 'Annet (white dahlias)',
        price: 245,
        isSale: false,
        currentPrice: 245,
        isFrom: false
    },

    {
        id: 9,
        image: 'images/catalog/product9.png',
        title: 'Garden roses in a bouquets',
        price: 120,
        isSale: false,
        currentPrice: 120,
        isFrom: true
    }
]  