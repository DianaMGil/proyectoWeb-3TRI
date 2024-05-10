export interface Usuarios {
    usuarios: Usuario[]
}

export interface Usuario {
    nombre: string
    apellidos: string,
    correo: string,
    telefono: string,
    como_llegado_aqui: string
    mensaje: string
}
