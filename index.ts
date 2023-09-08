import axios from "axios";

const GET = (url: any) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const fn = descriptor.value;
    setTimeout(() => {
      fn(["1", "2", "3"], "success");
    }, 3000);
  };
};

class AxiosSever {
  constructor() {}
  @GET("fdsafdaf")
  getList(res: any, msg: string) {
    console.log(res, msg);
  }
}
