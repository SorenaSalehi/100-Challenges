export default function ImgDisplay({ shirt, setShirt }) {
  return (
    <div className="img-display">
      <aside>
        <div className={shirt === 1 ? "" : "blur"} onClick={() => setShirt(1)}>
          <img src="./img-1.jpg" alt="t-shirt"></img>
        </div>
        <div className={shirt === 2 ? "" : "blur"} onClick={() => setShirt(2)}>
          <img src="./img-2.jpg" alt="t-shirt"></img>
        </div>
        <div className={shirt === 3 ? "" : "blur"} onClick={() => setShirt(3)}>
          <img src="./img-3.jpg" alt="t-shirt"></img>
        </div>
      </aside>
      <main>{<img src={`./img-${shirt}.jpg`} alt="t-shirt"></img>}</main>
    </div>
  );
}
