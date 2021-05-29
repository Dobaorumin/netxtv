const apiUrl = "https://polar-escarpment-70051.herokuapp.com"

export async function fetchApi(path, { body, method }) {
    const headers = new Headers({ "Content-Type": "application/json",'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36' });
    const request = await fetch(`${apiUrl}${path}`, {
      headers: headers,
      method: method,
      body: JSON.stringify(body),
    });
    const requestData = await request.json();
    if (requestData.status === "error") {
      throw requestData.message;
    }
    return requestData;
  }

  export async function getProductos(){
      const data = fetchApi(`/products`,{
          method:"GET"
      })
      return data;
  }

  export async function getProduct(identificador){
    const data = fetchApi(`/products/${identificador}`,{
      method:"GET"
    })
      return data;
  }

  export async function getProductosCategorias(nombre){
    const productosCategoria = await fetchApi(
      `/${nombre}`,
      {
        method: "GET",
      }
    );
    return productosCategoria.data;
  }