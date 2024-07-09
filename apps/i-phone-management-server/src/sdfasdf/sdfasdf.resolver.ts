import * as graphql from "@nestjs/graphql";
import { SdfasdfResolverBase } from "./base/sdfasdf.resolver.base";
import { Sdfasdf } from "./base/Sdfasdf";
import { SdfasdfService } from "./sdfasdf.service";

@graphql.Resolver(() => Sdfasdf)
export class SdfasdfResolver extends SdfasdfResolverBase {
  constructor(protected readonly service: SdfasdfService) {
    super(service);
  }
}
