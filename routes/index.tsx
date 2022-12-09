import { ProductCard } from "../components/ProductCard.tsx";

export default function Index() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Portfolio</h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">Web design</a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">App design</a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Branding</a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Animation</a>
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                <ProductCard
                  imgURL="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                  name="Best website collections"
                />

                <ProductCard
                  imgURL="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  name="Block of Ui kit collections"
                />

                <ProductCard
                  imgURL="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="Ton’s of mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
