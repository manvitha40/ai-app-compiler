import { z } from "zod";

const ColumnSchema = z.object({
  name: z.string(),
  type: z.string()
});

const TableSchema = z.object({
  name: z.string(),
  columns: z.array(ColumnSchema)
});

const DBSchema = z.object({
  tables: z.array(TableSchema)
});

export function validateDB(db) {

  try {

    DBSchema.parse(db);

    return {
      valid: true,
      errors: []
    };

  } catch (error) {

    return {
      valid: false,
      errors: error.errors
    };
  }
}