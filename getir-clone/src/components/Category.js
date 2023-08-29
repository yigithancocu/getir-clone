import { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Categor from "./Categor";
function Category() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setTimeout(() => setCategories(categoryData), 1000);
  }, []);
  console.log(categories);

  return (
    <div className="bg-white px-12 w-full ">
      <h3 className="ml-5">Kategoriler</h3>
      <div className="grid grid-cols-10  ">
        {!categories && "Yükleniyor"}
        {categories &&
          categories.map((categories) => <Categor categories={categories} />)}
      </div>
    </div>
  );
}

export default Category;
