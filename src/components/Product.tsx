import type { Product } from "../types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
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
          </h3>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 flex-1">
          {product.description}
        </p>

        <StarRating rating={product.rating} />

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
