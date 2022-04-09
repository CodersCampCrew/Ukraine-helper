export enum Categories{
    transport,
    pernamentStay,
    sleepover,
    forkids,
    electronic,
    legalAssistance,
    temporaryState,
    medicalAndPsychologicalAssistance
}

export interface Ad {
createdByUser: string,
createAtDate: Date,
category: Categories,
properties: {mixed: any}
}

