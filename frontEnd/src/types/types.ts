//respuesta esperada al hacer login exitoso
export interface AuthResponse {
  body: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}
//respuesta esperada al hacer login fallido
export interface AuthResponseError {
  body: {
    error: string;
  };
}
//estructura del usuario 
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}
//para cuando se solicita un nuevo access token con el refresh token
export interface AccessTokenResponse {
  statusCode: number;
  body: {
    accessToken: string;
  };
  error?: string;
}

