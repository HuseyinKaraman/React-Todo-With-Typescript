export class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;
    constructor(id: number, description: string, assigned: string) {
        this.rowNumber = id;
        this.rowDescription = description;
        this.rowAssigned = assigned;
    }
}
