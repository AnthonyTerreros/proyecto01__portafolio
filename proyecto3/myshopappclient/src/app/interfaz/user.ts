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
