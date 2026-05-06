import type { ProductsData } from "../types";

const Header = ({ productsData }: { productsData: ProductsData }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">
          FreeAPI Product Store
        </h1>
        {productsData && (
          <p className="text-sm text-gray-500">
            {productsData.totalItems} products
          </p>
        )}
      </div>
    </header>
  );
};

export { Header };
