import { useState } from "react";
import ImgDisplay from "./imgDisplay";
import Description from "./description";
export default function Main() {
  const [shirt, setShirt] = useState(1);

  return (
    <main>
      <ImgDisplay shirt={shirt} setShirt={setShirt} />
      <Description shirt={shirt} />
    </main>
  );
}
