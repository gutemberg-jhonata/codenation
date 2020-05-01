const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function findProducts(ids, productsList) {
	let productsId = [];
	const newProductsList = [...productsList];
	ids.map(id => {
		const productById = newProductsList.reduce((newProduct, product) => {
			if (product.id === id) {
				newProduct = {
					name: product.name,
					category: product.category
				}
			}
			return newProduct;
		}, {});
		productsId.push(productById);
	});
	return productsId;
}

function findPromotion(products, promotions) {
	const newProducts = [...products];
	const categories = newProducts.reduce((categories, product) => {
		if (!categories[product.category]) {
			categories[product.category] = product.category;
		}
		return categories;
	}, {});
	const count = Object.values(categories).length;
	return promotions[count - 1];
}

function findPrice(ids, promotion, productsList) {
	let productsId = [];
	const newProductsList = [...productsList];
	const newPromotion = promotion;
	let totalRegularPrice = 0;
	let totalPrice = 0;
	let discountValue;
	let discount;
	ids.map(id => {
		newProductsList.map(product => {
			if (product.id === id) {
				const regularPrice = parseFloat(product.regularPrice);
				totalRegularPrice += regularPrice;
				let findPromotion = false;
				product.promotions.forEach(promotion => {
					const filterPromotion = promotion.looks.filter(look => look === newPromotion);
					if (filterPromotion.length) {
						totalPrice += promotion.price;
						findPromotion = true;
					}
				});
				if (!findPromotion) {
					totalPrice += regularPrice;
				}
			}
		});
	});
	discountValue = totalRegularPrice - totalPrice;
	discount = (discountValue * 100) / totalRegularPrice;
	return {
		totalPrice: totalPrice.toFixed(2).toString(),
		discountValue: discountValue.toFixed(2).toString(),
		discount: discount.toFixed(2) + "%"
	};
}

function getShoppingCart(ids, productsList) {	
	const products = findProducts(ids, productsList);
	const promotion = findPromotion(products, promotions);
	const price = findPrice(ids, promotion, productsList);
	return {
		products,
		promotion,
		...price
	};
}

module.exports = { 
	getShoppingCart,
	findProducts,
	findPromotion,
	findPrice
};
