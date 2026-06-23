import { z } from "zod";

const EndpointSchema = z.object({
  path: z.string(),
  method: z.string()
});

const APISchema = z.object({
  endpoints: z.array(EndpointSchema)
});

export function validateAPI(api) {

  try {

    APISchema.parse(api);

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