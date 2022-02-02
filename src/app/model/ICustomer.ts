export interface ICustomer
 {
    gender: string,
    name: {
              title: string,
              first: string,
              last: string
    },
    location: {
              street: {
                        number: number,
                        name: string
              },
              city: string,
              state: string,
              country: string,
              postcode: number,
              coordinates: {
                        latitude: number,
                        longitude: number
              },
              timezone: {
                        offset: number,
                        description: string
              }
    },
    email: string,
    clinic: string,
    provider: string,
    PresentIllness: string,
    HistoryOfPresentIllness: string,
    PastMedicalHistory: {
              first: string,
              second: string
    },
    PastSurgicalAndProcedureHistory: string,
    FamilyHistory: string,
    SocialHistory: string,
    Allergies: string,
    CurrentMedications: string,
    PastMedications: string,
    SideEffectsOfMedications: string,
    Vitals: string,
    ReviewOfSystems: string,
    login: {
              uuid: string,
              username: string,
              password: string,
              salt: string,
              md5: string,
              sha1: string,
              sha256: string
    },
    dob: {
              date: string,
              age: number
    },
    registered: {
              date: string,
              age: number
    },
    phone: number,
    cell: number,
    id: {
              name: string,
              value: number
    },
    picture: {
              large: string,
              medium: string,
              thumbnail: string
    },
    nat: string
}
