

const products = [
    { 
        id: '1', 
        name: 'Cajon', 
        price: 10000, 
        category: 'estructura', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_605115-MLA69398220348_052023-O.webp', 
        stock: 100, 
        description:'Cajon 100x100x100'
    },
    { id: '2', name: 'Pallet', price: 2000, category: 'base', img:'https://http2.mlstatic.com/D_NQ_NP_612663-MLA74652508899_022024-O.webp', stock: 100, description:'Plataforma 100x100x20'},
    { id: '3', name: 'Jaula', price: 20000, category: 'estructura', img:'https://http2.mlstatic.com/D_NQ_NP_825723-MLA49534429219_032022-O.webp', stock: 100, description:'Jaula 150x150x150'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}