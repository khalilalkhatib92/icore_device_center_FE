export interface dealerCreationDTO{
    name: string;
    dateOfBirth: Date;
    picture: File | string;
    biography: string;
}

// This interface will used when receving a data form DB for example.
// so the picture value will be of type (string) because we can pass it as a urlImage
export interface dealerDTO{
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}