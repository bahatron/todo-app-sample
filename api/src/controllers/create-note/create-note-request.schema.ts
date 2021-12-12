import { JSONSchema } from "json-schema-to-typescript";
import { pick } from "lodash";
import noteSchema from "../../models/note/note.schema";

const fields = ["body"];

export default <JSONSchema>{
    type: "object",
    additionalProperties: false,
    required: fields,
    properties: pick(noteSchema.properties, fields),
};
