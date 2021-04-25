const apiUrl = "http://localhost:1337"

async function fetchApi(path, { body, method }) {
    const headers = new Headers({ "Content-Type": "application/json" });
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
      const data = fetchApi(`/productos`,{
          method:"GET"
      })
      return data
  }