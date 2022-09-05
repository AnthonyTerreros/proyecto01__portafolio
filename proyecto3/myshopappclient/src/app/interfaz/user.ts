export type Roles = 'ADMIN' | 'USER'

export interface User {
    email: string,
    pasword: string
}

export interface UserResponse {
    userId: number,
    token: string,
    message: string,
    role: Roles
}

export interface UserProfile {
    correo: string;
    createdAt: string;
    direccion: string;
    id: 3
    nombre: string;
    rol: string;
    updatedAt: string;
    username: string;
}