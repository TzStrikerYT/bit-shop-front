export class User {

    //atributos y sus tipos
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin: boolean
    confirmPassword: string

    //constructor instanciar o a inicializar los atributos cuando tengan un valor
    constructor(firstName = "", lastName = "", email = "", password = "", isAdmin = false, confirmPassword = ""){

        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
        this.confirmPassword = confirmPassword

    }

}