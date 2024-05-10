export interface Root {
  gimnasio: Gimnasio
}

export interface Gimnasio {
  nombre: string
  servicios: Servicio[]
}

export interface Servicio {
  nombre: string
  descripcion: string
  Duracion: string
}
