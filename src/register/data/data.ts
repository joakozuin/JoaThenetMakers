interface Data {
    id: number,
    name: string
}

export const gender: Data[] = [
    {id: 1, name: 'Hombre'},
    {id: 2, name: 'Mujer'},
    {id: 3, name: 'Otro'}
]

export const experience: Data[] = [
    {id: 1, name: 'Menos de 1 año'},
    {id: 2, name: 'Entre 1 y 3 años'},
    {id: 3, name: 'Entre 3 y 5 años'},
    {id: 4, name: 'Más de 5 años'}
]

export const salary: Data[] = [
    {id: 1, name: "menos de 10 dolares"},
    {id: 2, name: "Entre 21 y 30 dólares"},
    {id: 3, name: "Entre 31 y 40 dólares"},
    {id: 4, name: "Más de 40 dólares"}
]

export const trueFalse: Data[] = [
    {id: 1, name: "Sí"},
    {id: 2, name: "No"},
]