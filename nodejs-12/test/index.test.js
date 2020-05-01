const { products } = require('../src/data/products');
const { getShoppingCart, findProducts, findPromotion, findPrice } = require('../src');

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const exemplo1Mock = {
	products: [
		{ name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'ASYMMETRICAL LEATHER SLIDE HEELS', category: 'SHOES' },
		{ name: 'SOFT FLAP BACKPACK', category: 'BAGS' }
	],
	promotion: 'FULL LOOK',
	totalPrice: '404.96',
	discountValue: '75.00',
	discount: '15.63%'
};

const exemplo2Mock = {
	products: [
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'MENSWEAR PANTS', category: 'PANTS' }
	],
	promotion: 'DOUBLE LOOK',
	totalPrice: '504.95',
	discountValue: '25.00',
	discount: '4.72%'
};

const exemplo3Mock = {
	products: [
		{ name: 'PINK PANTHER™ T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' }
	],
	promotion: 'SINGLE LOOK',
	totalPrice: '524.96',
	discountValue: '10.00',
	discount: '1.87%'
};

const exemplo4Mock = {
	products: [
		{ name: 'PINK PANTHER™ T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'ASYMMETRICAL LEATHER SLIDE HEELS', category: 'SHOES' },
		{ name: 'SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL', category: 'SHOES' }
	],
	promotion: 'TRIPLE LOOK',
	totalPrice: '784.94',
	discountValue: '130.00',
	discount: '14.21%'
};

describe('Find Products', () => {
	
	it('Deve retornar os produtos a partir do array de IDs do exemplo 1', () => {
		const result = findProducts([120, 230, 310, 490], products);
		expect(result).toEqual(exemplo1Mock.products);
	});

	it('Deve retornar os produtos a partir do array de IDs do exemplo 2', () => {
		const result = findProducts([130, 140, 230, 260], products);
		expect(result).toEqual(exemplo2Mock.products);
	});

	it('Deve retornar os produtos a partir do array de IDs do exemplo 3', () => {
		const result = findProducts([110, 120, 130, 140], products);
		expect(result).toEqual(exemplo3Mock.products);
	});

	it('Deve retornar os produtos a partir do array de IDs do exemplo 4', () => {
		const result = findProducts([110, 130, 140, 230, 310, 330], products);
		expect(result).toEqual(exemplo4Mock.products);
	});

});

describe('Find Promotion', () => {
	
	it('Deve retornar a promoção do exemplo 1', () => {
		const promotion = findPromotion(exemplo1Mock.products, promotions);
		expect(promotion).toBe(exemplo1Mock.promotion);
	});

	it('Deve retornar a promoção do exemplo 2', () => {
		const promotion = findPromotion(exemplo2Mock.products, promotions);
		expect(promotion).toBe(exemplo2Mock.promotion);
	});

	it('Deve retornar a promoção do exemplo 3', () => {
		const promotion = findPromotion(exemplo2Mock.products, promotions);
		expect(promotion).toBe(exemplo2Mock.promotion);
	});

	it('Deve retornar a promoção do exemplo 4', () => {
		const promotion = findPromotion(exemplo2Mock.products, promotions);
		expect(promotion).toBe(exemplo2Mock.promotion);
	});

});

describe('Find Price', () => {
	
	it('Deve retornar os preços do exemplo 1', () => {
		const price = findPrice([120, 230, 310, 490], exemplo1Mock.promotion, products);
		expect(price.totalPrice).toBe(exemplo1Mock.totalPrice);
		expect(price.discountValue).toBe(exemplo1Mock.discountValue);
		expect(price.discount).toBe(exemplo1Mock.discount);
	});

	it('Deve retornar os preços do exemplo 2', () => {
		const price = findPrice([130, 140, 230, 260], exemplo2Mock.promotion, products);
		expect(price.totalPrice).toBe(exemplo2Mock.totalPrice);
		expect(price.discountValue).toBe(exemplo2Mock.discountValue);
		expect(price.discount).toBe(exemplo2Mock.discount);
	});
	
	it('Deve retornar os preços do exemplo 3', () => {
		const price = findPrice([110, 120, 130, 140], exemplo3Mock.promotion, products);
		expect(price.totalPrice).toBe(exemplo3Mock.totalPrice);
		expect(price.discountValue).toBe(exemplo3Mock.discountValue);
		expect(price.discount).toBe(exemplo3Mock.discount);
	});

	it('Deve retornar os preços do exemplo 4', () => {
		const price = findPrice([110, 130, 140, 230, 310, 330], exemplo4Mock.promotion, products);
		expect(price.totalPrice).toBe(exemplo4Mock.totalPrice);
		expect(price.discountValue).toBe(exemplo4Mock.discountValue);
		expect(price.discount).toBe(exemplo4Mock.discount);
	});

});

describe('Get Shopping Cart', () => {
	
	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 1', () => {
		const cart = getShoppingCart([120, 230, 310, 490], products);

		expect(cart).toEqual(exemplo1Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 2', () => {
		const cart = getShoppingCart([130, 140, 230, 260], products);

		expect(cart).toEqual(exemplo2Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 3', () => {
		const cart = getShoppingCart([110, 120, 130, 140], products);

		expect(cart).toEqual(exemplo3Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 4', () => {
		const cart = getShoppingCart([110, 130, 140, 230, 310, 330], products);

		expect(cart).toEqual(exemplo4Mock);
	});

});
