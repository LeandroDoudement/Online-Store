const addItem = (objItem) => {
  const produtos = JSON.parse(localStorage.getItem('cart')) || [];
  const hasItem = produtos.find((element) => (
    element.id === objItem.id
  ));
  let newProdutos = [];
  if (hasItem) {
    const newArray = produtos.filter((element) => (
      element.id !== objItem.id
    ));
    hasItem.quantidade += 1;
    newProdutos = [...newArray, hasItem];
  } else {
    objItem.quantidade = 1;
    newProdutos = [...produtos, objItem];
  }
  localStorage.setItem('cart', JSON.stringify(newProdutos));
};

export default addItem;
