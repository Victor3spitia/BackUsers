import crypto from 'node:crypto'
import DBLocal from 'db-local'
import bcrypt from 'bcrypt'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema("User", {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
})

export class schema{
    static async create({name, password}) {
        //1. validaciones de username
    Validation.username(name)
    Validation.password(password)
    
    //2. asegurarse de que el username NO existe
    const user = User.findOne({name})
    if (user) throw new Error ('username ya existe')
        //para generar id opcional por si la propia base de datos no funciona
    //const id = crypto.randomUUID()
    const hashedPassword = await bcrypt.hashSync(password, 10)//decodificacion de contraseña bloquea el thread principal

    User.create({
        _id: id,
        name, 
        email,
        password: hashedPassword, 
        role
    }).save()
    return id

    }

    static async login({name, password}) {
    Validation.username(name)
    Validation.password(password)

    const user = User.findOne({name})// busca el usuario por nombre
    //si no existe el usuario, lanza un error
    if (!user) throw new Error('usuario no existe')

    const isValid = bcrypt.compareSync(password, user.password)//compara la contraseña ingresada con la almacenada
    if (!isValid) throw new Error('contraseña incorrecta') //si la contraseña no es correcta, lanza un error

    const { password: _, ...publicUser } = user //quita propiedades a un objeto
    return publicUser //devuelve el usuario sin la contraseña
    }
}

class Validation{
    static username(name) {
        if (typeof name !== 'string') throw new Error('username debe ser string')
        if (name.length < 3) throw new Error('username debe tener almenos 3 caracteres')
    }
    
    static password(password){
        //pendiente para cambiar la validacion de una contraseña a un numero
    if (typeof password !== 'string') throw new Error('contraseña debe ser string')
        if (password.length < 4) throw new Error('contraseña debe tener almenos 4 caracteres')
    }

}