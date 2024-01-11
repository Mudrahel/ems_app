export class Employee {
    id: number;
    fullName: string;
    department: string;
    phone: number;
    address: string;

    constructor(id: number, fullName: string, department: string, phone: number, address: string) {
        this.id = id;
        this.fullName = fullName;
        this.department = department;
        this.phone = phone;
        this.address = address;
    }
}
