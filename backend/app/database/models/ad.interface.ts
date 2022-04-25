export enum Categories {
  transport = 'transport',
  permanentStay = 'permanentStay',
  temporaryStay = 'temporaryStay',
  sleepover = 'sleepover',
  forkids = 'forkids',
  electronic = 'electronic',
  legalAssistance = 'legalAssistance',
  medicalAssistance = 'medicalAssistance'
}

// export interface Ad {
// createdByUser: string,
// createAtDate: Date,
// category: Categories,
// properties: {location: string}
// }

interface commonInfo {
  createdBy: string;
  createdAt: Date;
}

export interface Transport extends commonInfo {
  category: Categories.transport;
  properties: {
    for: string;
    from: string;
    to: string;
    time: Date;
    desc: string;
  };
}
export interface permanentStay extends commonInfo {
  category: Categories.permanentStay;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface TemporaryStay extends commonInfo {
  category: Categories.temporaryStay;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface Sleepover extends commonInfo {
  category: Categories.sleepover;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface ForKids extends commonInfo {
  category: Categories.forkids;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface Electronic extends commonInfo {
  category: Categories.electronic;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface LegalAssistance extends commonInfo {
  category: Categories.legalAssistance;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}
export interface MedicalAssistance extends commonInfo {
  category: Categories.medicalAssistance;
  properties: {
    for: string;
    closeTo: string;
    availableFrom: string;
    available: Date;
    desc: string;
  };
}

export type Ad =
  | Transport
  | permanentStay
  | TemporaryStay
  | Sleepover
  | ForKids
  | Electronic
  | LegalAssistance
  | MedicalAssistance;
