import "reflect-metadata";
import { HttpMethods, MetadataKeys } from "./enums";
import { RouteHandlerDescriptor } from "./interfaces";

export function routeBinder(httpMethod: string) {
  return function(path: string) {
    return function(
      target: any,
      key: string,
      descriptor: RouteHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.HttpMethod, httpMethod, target, key);
    };
  };
}

export const Get = routeBinder(HttpMethods.Get);
export const Put = routeBinder(HttpMethods.Put);
export const Post = routeBinder(HttpMethods.Post);
export const Del = routeBinder(HttpMethods.Del);
export const Patch = routeBinder(HttpMethods.Patch);
