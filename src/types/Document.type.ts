export interface IDocument {
  id: string;
  name: string;
  parent_id: string | null;
  extension: string | null;
  children: IDocument[];
  file: string | null;
  created_at: unknown;
  updated_at: unknown;
}
