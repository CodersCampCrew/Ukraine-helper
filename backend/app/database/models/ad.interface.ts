export enum Categories{
    transport = 'transport',
    permanentStay = 'permanentStay',
    sleepover = 'sleepover',
    forkids = 'forkids',
    electronic = 'electronic',
    legalAssistance = 'legalAssistance',
    temporaryState = 'temporaryState',
    medicalAndPsychologicalAssistance = 'medicalAndPsychologicalAssistance'
}

// export interface Ad {
// createdByUser: string,
// createAtDate: Date,
// category: Categories,
// properties: {location: string}
// }

interface commonInfoAd {
    createdBy: string,
    createdAt: Date;
}

export interface TransportAd extends commonInfoAd {
    category: Categories.transport;
    properties: {
        for: string,
        from: string,
        to: string,
        time: Date;
    }
}
export interface PermanentStayAd extends commonInfoAd {
    category: Categories.permanentStay;
    properties: {
        for: string,
        closeTo: string,
        availableFrom: string,
        available: Date;
    }
}

export type Ad = TransportAd | PermanentStayAd;
