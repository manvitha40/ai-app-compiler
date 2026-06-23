import { z } from "zod";

const PageSchema = z.object({
  name: z.string(),
  components: z.array(z.string())
});

const UISchema = z.object({
  pages: z.array(PageSchema)
});

export function validateUI(ui) {
  try {
    UISchema.parse(ui);

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