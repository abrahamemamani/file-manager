export interface IDocument {
  id: string;
  name: string;
  parent_id: string | null;
  extension: string | null;
  file: string | null;
  created_at: unknown;
  updated_at: unknown;
}
