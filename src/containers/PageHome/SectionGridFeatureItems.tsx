import React, { FC } from "react";
import HeaderFilterSection from "components/HeaderFilterSection";
import ProductCard from "components/ProductCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Recipes, RECIPES } from "data/recipedata";

//
export interface SectionGridFeatureItemsProps {
  data?: Recipes[];
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  data = RECIPES,
}) => {
  return (<></>)};
//     <div className="nc-SectionGridFeatureItems relative">
//       <HeaderFilterSection />
//       <div
//         className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
//       >
//         {data.map((item, index) => (
//           <ProductCard data={item} key={index} />
//         ))}
//       </div>
//       <div className="flex mt-16 justify-center items-center">
//         <ButtonPrimary loading>Show me more</ButtonPrimary>
//       </div>
//     </div>
//   );
// };

export default SectionGridFeatureItems;
