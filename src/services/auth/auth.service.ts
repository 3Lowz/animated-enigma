export default class AuthService {
  login(email: string, password: string): string {
    if (this.isUserValid(email, password)) return 'jsonwebtoken'
    else throw new Error(`Invalid credentials`)
  }

  isUserValid(email: string, password: string): boolean {
    if (email.length > 10 && password === 'admin') return true
    else return false
  }
}
