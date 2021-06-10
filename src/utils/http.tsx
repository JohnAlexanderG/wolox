class Http {
    static instance = new Http();

    get = async (url: string) => {
        try {
          const request = await fetch(url);
          const json = await request.json();
          return json;
        } catch (err: any) {
          console.error('HTTP GET Error: ', err);
          throw Error(err);
        }
      };
}

export default Http;