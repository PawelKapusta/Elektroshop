import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "1",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image:
        "https://i.pinimg.com/564x/e8/70/4f/e8704f8e742fd43fc0617d47c04862a4.jpg",
      price: 120,
      quantity: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      id: "2",
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image:
        "https://cdn.pixabay.com/photo/2013/07/13/14/07/microphone-162167_960_720.png",
      price: 100,
      quantity: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      id: "3",
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image:
        "https://www.icon0.com/static2/preview2/stock-photo-cpu-icon-36119.jpg",
      price: 220,
      quantity: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      id: "4",
      name: "Nike Slim Pant",
      category: "Pants",
      image:
        "https://cdn.pixabay.com/photo/2013/07/13/14/07/microphone-162167_960_720.png",
      price: 78,
      quantity: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      id: "5",
      name: "Puma Slim Pant",
      category: "Pants",
      image:
        "https://i.pinimg.com/564x/e8/70/4f/e8704f8e742fd43fc0617d47c04862a4.jpg",
      price: 65,
      quantity: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      id: "6",
      name: "Adidas Fit Pant",
      category: "Pants",
      image:
        "https://www.icon0.com/static2/preview2/stock-photo-cpu-icon-36119.jpg",
      price: 139,
      quantity: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
