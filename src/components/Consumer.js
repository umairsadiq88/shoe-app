import React, {useContext} from "react";
import Context from '../components/Context';
import { allCategorieShoes } from "../components/Context";

const Consumer = () => {

const Men = useContext(Context.Data) 

  return (
    <>

      <allCategorieShoes.Consumer>
        {() => {

          return (
            <>
              <div>
                <h1>Mens</h1>
                {Object.entries(Data.menShoes).map((item) => (
                  <div>
                    <h1>{item[1].name}</h1>
                    <img src={item[1].img} alt="" />
                  </div>
                ))}
              </div>

              <div>
                <h1>Women</h1>
                {Object.entries(Data.womenShoes).map((item) => (
                  <div>
                    <h1>{item[1].name}</h1>
                    <img src={item[1].img} alt="" />
                  </div>
                ))}
              </div>

              <div>
                <h1>Kids</h1>
                {Object.entries(Data.kidShoes).map((item) => (
                  <div>
                    <h1>{item[1].name}</h1>
                    <img src={item[1].img} alt="" />
                  </div>
                ))}
              </div>

            </>
          );
        }}
      </allCategorieShoes.Consumer>
    </>
  );
}

export default Consumer;
