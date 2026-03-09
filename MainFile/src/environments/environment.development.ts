export const environment = {
    production: false,
    imagePath: 'http://localhost:5149',
    baseUrl : 'http://localhost:5149/api'
}

export const API = {
     LOGIN: `${environment.baseUrl}/User/Login`,
     REGISTER: `${environment.baseUrl}/User/RegisterUser`,
     PRODUCT: `${environment.baseUrl}/Product`,
     CART: `${environment.baseUrl}/Cart`,
     CATEGORY: `${environment.baseUrl}/Category`,
     CHAT:`${environment.baseUrl}/chat/query`,
     USER: `${environment.baseUrl}/User`
}