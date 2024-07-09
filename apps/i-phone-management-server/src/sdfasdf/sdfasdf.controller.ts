import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SdfasdfService } from "./sdfasdf.service";
import { SdfasdfControllerBase } from "./base/sdfasdf.controller.base";

@swagger.ApiTags("sdfasdfs")
@common.Controller("sdfasdfs")
export class SdfasdfController extends SdfasdfControllerBase {
  constructor(protected readonly service: SdfasdfService) {
    super(service);
  }
}
