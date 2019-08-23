import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./enums";

export function Use(middleware: RequestHandler) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
