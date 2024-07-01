import { Product } from "./Product";

export function ProductsMain(){
    return(
        <main>
            <Product title="Teste" description ="Teste Descição" price={2.99} />
        </main>
    )
}