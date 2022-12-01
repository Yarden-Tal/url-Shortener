const BASE_URL: string = "https://api.shrtco.de/v2";
const apiMethod: string = "/shorten";
const urlParam: string = "?url=";

const getData = async (inputUrl: string): Promise<any> => {
  try {
    const res: Response = await fetch(
      `${BASE_URL}${apiMethod}${urlParam}${inputUrl}`
    );
    if (res.ok) {
      const { result }: { result: Result } = await res.json();
      return result;
    } else {
      const json = await res.json();
      throw json;
    }
  } catch (err) {
    console.error(err);
  }
};

export default getData;
