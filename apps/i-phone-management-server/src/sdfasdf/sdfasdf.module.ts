import { Module } from "@nestjs/common";
import { SdfasdfModuleBase } from "./base/sdfasdf.module.base";
import { SdfasdfService } from "./sdfasdf.service";
import { SdfasdfController } from "./sdfasdf.controller";
import { SdfasdfResolver } from "./sdfasdf.resolver";

@Module({
  imports: [SdfasdfModuleBase],
  controllers: [SdfasdfController],
  providers: [SdfasdfService, SdfasdfResolver],
  exports: [SdfasdfService],
})
export class SdfasdfModule {}
