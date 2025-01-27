const zod = require("zod");

const zodSchemaA = zod.object({
  title: zod.string().nonempty("title should be provided"),
  description: zod.string("description should be provided"),
});

//const zodSchemaB = zod.string().nonempty("id can not be empty");

const zodSchemaB = zod
  .string()
  .regex(/^[a-fA-F0-9]{24}$/, "Invalid MongoDB ObjectId");

module.exports = { zodSchemaA: zodSchemaA, zodSchemaB: zodSchemaB };
