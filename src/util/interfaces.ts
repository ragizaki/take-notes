export interface Note {
    title: string;
    description: string;
    created: Date;
    id: number;
}

export interface Theme {
    palette: {
        mode: string;
    };
}
