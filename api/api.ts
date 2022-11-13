const BASE_URL: string = "https://api.shrtco.de/v2";
const apiMethod: string = "/shorten";
const urlParam: string = "?url=";

const getData = async (inputUrl: string): Promise<any> => {
  try {
    const res: Response = await fetch(
      // e.g. https://api.shrtco.de/v2/shorten?url=www.google.com
      `${BASE_URL}${apiMethod}${urlParam}${inputUrl}`
    );
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      return json;
    } else {
      const json = await res.json();
      throw json;
    }
  } catch (err) {
    console.error(err);
  }
};

export default getData;
