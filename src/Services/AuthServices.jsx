export const fakeDB = {
    users: [
        { name: "Gehad", email: "gehad6111@gmail.com", password: "1234567", profileImage: "", role: "teacher" },
        { name: "Ahmed", email: 'ahmad345@gmail.com', password: "1272002", profileImage: "", role: "student" },
        { name: "Reem", email: 'reem346@gmail.com', password: "12720026111", profileImage: "", role: "admin" }
    ],
}


export const loginService = async (email, password) => {
    const user = fakeDB.users.find((u) => u.email === email && u.password === password)
    if (!user) throw new Error("Invalid email or password!")
    return user
}

export const registerService = async (name, email, password, profileImage, role) => {
    const exists = fakeDB.users.find((u) => u.name === name && u.email === email && u.password === password)
    if (exists) throw new Error("User already exists")
    const newUser = { name, email, password, profileImage, role }
    fakeDB.users.push(newUser)
    return newUser
}