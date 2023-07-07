import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
const Gallery = () => {
  let listImg = [img1, img2, img3, img4];
  let [img, setImg] = useState(img1);
  var previewimg = useRef(null);
  let largeImg = useRef(null);
  let btn = useRef(null);
  let index = listImg.findIndex((item) => item === img);

  useEffect(() => {
    const ele = previewimg.current;
    const large_img = largeImg.current;
    const button = btn.current;
    button.addEventListener("click", () => {
      ele.style.display = "none";
    });
    large_img.addEventListener("click", () => {
      ele.style.display = "block";
    });
  }, [img]);

  function handleChangeIndexImg(n){
    if(index + n <0){
      setImg(listImg[listImg.length-1]);
    }else if(index +n >listImg.length-1){
      setImg(listImg[0]);
    }    
    else{  
    setImg(listImg[index+n]);
    }
  }
  const changeBigImg = (img) => {
    setImg(img);
  };

  return (
    <>
      <div className="product_gallery">
        <div className="img_up" >
          <img src={img} alt="" ref={largeImg} />
        </div>

        <div className="img_down">
          <img src={img1} alt="" onClick={() => changeBigImg(img1)} />
          <img src={img2} alt="" onClick={() => changeBigImg(img2)} />
          <img src={img3} alt="" onClick={() => changeBigImg(img3)} />
          <img src={img4} alt="" onClick={() => changeBigImg(img4)} />
        </div>
      </div>
      <div className="preview_img" ref={previewimg}>
        <span className="close" ref={btn}>
          &times;
        </span>

        <img className="modal-content" id="img01" src={img} />

        <a className="prev" onClick={()=>handleChangeIndexImg(-1)}>❮</a>
        <a className="next" onClick={()=>handleChangeIndexImg(1)}>❯</a>
      </div>
    </>
  );
};

export { Gallery };
