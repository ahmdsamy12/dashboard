import { useAppSelector } from "../rtk/Store";
import { product } from "../components/products/Products";

const Carts = () => {
  const carts = useAppSelector<product[]>((state) => state.products);

  const totalPrices = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart">
      <h1>Welcome to Carts</h1>
      <p>total prices: {totalPrices.toFixed(2)}</p>
      <button></button>
      <table>
        <thead>
          <tr>
            <th className="w-1/5 ">#</th>
            <th className="w-1/5">Title</th>
            <th className="w-1/5">Image</th>
            <th className="w-1/5">Price</th>
            <th className="w-1/5">Quntity</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td className="text-center">{cart.id}</td>
              <td>{cart.title}</td>
              <td>
                <img
                  src={cart.image}
                  alt=""
                  className="w-1/6 h-1/6 my-0 mx-auto"
                />
              </td>
              <td className="text-center">{cart.price}</td>
              <td className="text-center">{cart.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
