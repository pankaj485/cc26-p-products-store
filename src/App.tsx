import { useEffect, useState } from "react";
import type { ApiResponse, ProductsData } from "./types";
import { ProductCard } from "./components/Product";
import { Header } from "./components/Header";

const API_BASE = "https://api.freeapi.app/api/v1/public/randomproducts";

function App() {
  const [productsData, setProductsData] = useState<ProductsData | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((res: ApiResponse) => {
        if (res.success && res.statusCode === 200) {
          setProductsData(res.data);
        } else {
          setError("Failed to load products.");
        }
      })
      .catch(() => setError("Network error. Please try again."))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="min-h-dvh bg-gray-50">
      {productsData && <Header productsData={productsData} />}

      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading && (
          <div className="text-center">
            <h1>Loading products data...</h1>
          </div>
        )}

        {error && (
          <div className="text-center py-24">
            <p className="text-red-500 font-medium">{error}</p>
            <button
              onClick={() => setPage((p) => p)}
              className="mt-4 text-sm underline text-gray-500"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && productsData && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={!productsData.previousPage}
                className="px-5 py-2 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Page {productsData.page} of {productsData.totalPages}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={!productsData.nextPage}
                className="px-5 py-2 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
