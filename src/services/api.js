export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId !== '' && query === '') url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else if (categoryId === '' && query !== '') url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else if (categoryId !== '' && query !== '') url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const result = await fetch(url);
  const response = await result.json();
  return response;
}

export async function getProductById(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
}
