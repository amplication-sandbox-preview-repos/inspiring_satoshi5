import { Sdfasdf as TSdfasdf } from "../api/sdfasdf/Sdfasdf";

export const SDFASDF_TITLE_FIELD = "id";

export const SdfasdfTitle = (record: TSdfasdf): string => {
  return record.id?.toString() || String(record.id);
};
