interface User {
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    city: string,
    userRole: string,
    verifiedByEmail: boolean,
    verifiedByAdmin: boolean
}

export default User;