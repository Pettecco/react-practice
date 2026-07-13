export interface Country {
  isoCode: string;
  name: { language: string; text: string }[];
  officialLanguages: string[];
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: { language: string; text: string }[];
  regionalScope: string;
  nationwide: boolean;
}
