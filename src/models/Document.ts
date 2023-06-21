import { IDocument } from "@/types/Document.type";

export class Document implements IDocument {
  readonly id: string = "";
  readonly name: string = "";
  readonly parent_id: string | null = null;
  readonly extension: string | null = null;
  readonly file: string | null = null;
  readonly created_at: unknown = null;
  readonly updated_at: unknown = null;

  constructor({
    name,
    parent_id,
    extension,
    file,
    created_at,
    updated_at,
  }: Omit<IDocument, "id">) {
    this.name = name;
    this.parent_id = parent_id;
    this.extension = extension;
    this.file = file;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
