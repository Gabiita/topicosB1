interface IAuth {
    currentUser: Array,
    email: string,
    password: string
  }
  
  type ContextType = {
    auth: IAuth[]
    login: (auth: IAuth) => void
    logout: () => void
  }