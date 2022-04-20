interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    city: string,
    role: string,
    areaCode: string,
    verifiedByEmail: boolean,
    verifiedByAdmin: boolean
}

export default User;