export class homeImage {
  id: number;
  name: string;
  url: string;
  constructor(
    fields?: {
      id?: number;
      name?: string;
      url?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}
