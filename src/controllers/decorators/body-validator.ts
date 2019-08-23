import "reflect-metadata";
import { MetadataKeys } from "./enums";

export function BodyValidator(...keys: string[]) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.BodyValidator, keys, target, key);
  };
}
