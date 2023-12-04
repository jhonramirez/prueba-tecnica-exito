import axios from "axios";

const productsService = async() => {
  try {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default productsService;
