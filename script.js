var tb_products = [
    {price: 2.99, name: "trufa", description: "trufa de chocolate ", category_id: 1, quantity_stock: 30},
    {price: 0.1, name: "bala 7 belo", description: "bala de iogurte ", category_id: 1, quantity_stock:  20},
    {price:  1.50, name: "bombom", description: "bombom sonho de valsa ", category_id: 1, quantity_stock: 30},
    {price:  0.90, name: "bala de goma", description: "bala de goma sortida", category_id: 1, quantity_stock: 10},
    {price: 10.90, name: "yakult", description: "bebida leite fermentado", category_id: 1, quantity_stock: 9},
    {price:  6.90, name: "coxinha", description: "bebida leite fermentado ", category_id: 2, quantity_stock:4},
    {price: 6.90, name: "salgadinho", description: "salgadinho fofura ", category_id: 1, quantity_stock: 30},
    {price: 5.99, name: "bala 7 belo", description: "trufa de chocolate ", category_id: 1, quantity_stock: 30},
    {price:0.1, name: "suspiro", description: "suspiro doce ", category_id: 1, quantity_stock: 30},

]

console.log(tb_products[0]);
// {price: 2.99, name: "trufa", description: "trufa de chocolate ", category_id: 1, quantity_stock: 30}

// {price: 2.99, name: "trufa", description: "trufa de chocolate ", category_id: 1, quantity_stock: 30},
// {price: 0.1, name: "bala 7 belo", description: "bala de iogurte ", category_id: 1, quantity_stock:  20},
// {price:  1.50, name: "bombom", description: "bombom sonho de valsa ", category_id: 1, quantity_stock: 30},
// {price:  0.90, name: "bala de goma", description: "bala de goma sortida", category_id: 1, quantity_stock: 10},
// {price: 10.90, name: "yakult", description: "bebida leite fermentado", category_id: 1, quantity_stock: 9},
// {price:  6.90, name: "coxinha", description: "bebida leite fermentado ", category_id: 2, quantity_stock:4},
// {price: 6.90, name: "salgadinho", description: "salgadinho fofura ", category_id: 1, quantity_stock: 30},
// {price: 5.99, name: "bala 7 belo", description: "trufa de chocolate ", category_id: 1, quantity_stock: 30},
// {price:0.1, name: "suspiro", description: "suspiro doce ", category_id: 1, quantity_stock: 30},

// function imprimirArray(resultado) {
//     for (let i = 0; i < tb_products.length; i++) {
//      if (tb_products[i].category_id == 2){
//         console.log(tb_products[i])
     
//     }else{
//         console.log('não é um salgado')
//     }
// }
// }

function imprimirArray(resultado) {
    for (let i = 0; i < resultado.length; i++) {
     if (resultado[i].category_id == 2){
        console.log(resultado[i])
     
    }else{
        console.log('não é um salgado')
    }
}
}

// function imprimirArray(resultado) {
//     for (let i = 0; i < resultado.length; i++) {
//       console.log(resultado[i]);
//     }
//   }
  
imprimirArray(tb_products)
//Select * from tb_products where category_id = 2 


// INSERT INTO tb_categories (name) VALUES('doce');
// INSERT INTO tb_categories (name) VALUE('salgados');
// INSERT INTO tb_products (price, name, description, category_id, quantity_stock) VALUES(2.99, 'trufa', 'trufa de chocolate', 1, 30);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bala 7 belo', 'bala de iogurte', 0.1, 0.1, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bombom', 'bombom sonho de valsa', 1.50, 30, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bala de goma', 'bala de goma sortida', 0.90, 10, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('yakult', '', 10.90, 9, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('coxinha', '', 6.90, 4, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('salgadinho', 'salgadinho fofura', 5.99, 3, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bala 7 belo', 'bala de tutti fruit', 0.1, 9, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('risole', 'risole de presunto e queijo', 8.43, 22, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('suspiro', 'suspiro doce', 0.89, 0, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('pé de moleque', 'pé de moleque doce', 3.20, 0, 9);