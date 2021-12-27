import { JSONSchema } from "json-schema-to-typescript";
import { pick } from "lodash";
import noteSchema from "../../../models/note/note.schema";

const fields = ["header", "body"];

export default <JSONSchema>{
    type: "object",
    additionalProperties: false,
    required: ["body"],
    properties: pick(noteSchema.properties, fields),
};
