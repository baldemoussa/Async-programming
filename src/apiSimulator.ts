export function getProductDetails() {
    return new Promise((resolve, reject) => {
        const sucess=true;
        if(!sucess){
            reject(new Error('Failed to fetch product details'));
        }
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Product 1', price: 100 },
                { id: 2, name: 'Product 2', price: 200 },
            ]);
        }, 500);
    });
}
export function getProductReviews () {
    return new Promise((resolve, reject) => {
        const sucess=true;
        if(!sucess){
            reject('Failed to fetch product reviews');
        }
        setTimeout(() => {
            resolve([
                { id: 1, productId: 1, rating: 5 },
                { id: 2, productId: 1, rating: 4 },
                { id: 3, productId: 2, rating: 3 },
            ]);
        }, 1500);
    });
}


export function getRelatedProducts () {
    return new Promise((resolve, reject) => {
        const sucess=true;
        if(!sucess){
            reject('Failed to fetch related products');
        }
        setTimeout(() => {
            resolve([
                { id: 3, name: 'Product 3', price: 300 },
                { id: 4, name: 'Product 4', price: 400 },
            ]);
        }, 1000);
    });
}

console.log('Begin statement');

getProductDetails().then((products) => {
    console.log('Product:', products);
}).catch((error) => {
    console.error('Error fetching product details:', error);
});

getProductReviews().then((reviews) => {
    console.log('Product reviews:', reviews);
}).catch((error) => {
    console.error('Error fetching product reviews:', error);
});

getRelatedProducts().then((relatedProducts) => {
    console.log('Related products:', relatedProducts);
}).catch((error) => {
    console.error('Error fetching related products:', error);
});

console.log('End statement');