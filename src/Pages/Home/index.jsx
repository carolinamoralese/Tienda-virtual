import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCarConext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCarConext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }


  return (
    <Layout>
      <h1 className="font-medium text-xl p-4">Productos Exclusivos</h1>
      <input
      type="text"
      placeholder="Busca tu producto"
      className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
      onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className="grid gap-6 grid-cols-3 w-full max-w-screen-lg bg-slate-100">
      {renderView()}
      </div>
     
      <ProductDetail />
    </Layout>
  );
}

export default Home;
