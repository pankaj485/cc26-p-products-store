import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          -{product.discountPercentage.toFixed(0)}%
        </span>
        <span className="absolute top-3 right-3 bg-white text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-200 capitalize">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
            {product.brand}
          </p>
          <h3 className="text-gray-900 font-semibold text-base leading-snug mt-0.5 line-clamp-1">
            {product.title}
            <span className="text-sm opacity-60 ml-2">
              {" "}
              ({product.rating}){" "}
            </span>
          </h3>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-end justify-between mt-1">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${product.price}
              </span>
            </div>
            <p
              className={`text-xs mt-0.5 ${product.stock < 50 ? "text-red-500" : "text-green-600"}`}
            >
              {product.stock < 50
                ? `Only ${product.stock} left`
                : `${product.stock} in stock`}
            </p>
          </div>

          <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
