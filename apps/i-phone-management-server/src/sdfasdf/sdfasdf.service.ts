import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdfasdfServiceBase } from "./base/sdfasdf.service.base";

@Injectable()
export class SdfasdfService extends SdfasdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
