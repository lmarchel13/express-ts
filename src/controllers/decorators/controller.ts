import "reflect-metadata";
import { RouterSingleton } from "../../singletons/Router";
import { HttpMethods, MetadataKeys } from "./enums";
import { bodyValidators } from "./utils";

export function Controller(routePrefix: string) {
  return function(target: Function) {
    const router = RouterSingleton.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );

      const httpMethod: HttpMethods = Reflect.getMetadata(
        MetadataKeys.HttpMethod,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(
          MetadataKeys.BodyValidator,
          target.prototype,
          key
        ) || [];

      if (path) {
        router[httpMethod](
          `${routePrefix}${path}`,
          ...middlewares,
          bodyValidators(requiredBodyProps),
          routeHandler
        );
      }
    }
  };
}
