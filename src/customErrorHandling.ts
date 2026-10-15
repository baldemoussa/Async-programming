export function processOrder(product: {productId:number, quantity: number, price: number}) {
    if (product.quantity < 1) {
        throw new ValidationError('Invalid product quantity');
    }

    if (product.price < 0) {
        throw new PaymentError('Invalid product price');
    }

}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class PaymentError extends Error {
    constructor(message: string) {
        super(message);
    }
}


export function handleOrder() {

    try {
        const product1 = {productId: 1, quantity: 1, price: -10};
        processOrder(product1);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('Validation Error:', error.message);
        } else if (error instanceof PaymentError) {
            console.error('Payment Error:', error.message);
        } else {
            console.error('Unknown Error:', error);
        }
    }
    finally {
        console.log('Order processing completed.');
    }

}