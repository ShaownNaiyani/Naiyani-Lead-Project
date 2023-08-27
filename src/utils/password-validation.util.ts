import * as bcrypt from 'bcrypt';
const password_regex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(.{5,})$/;
export function isPasswordValid(password: string): boolean {
  return password_regex.test(password);
}

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
// for login
// export async function comparePasswords(
//   password: string,
//   hashedPassword: string,
// ) {
//   return bcrypt.compare(password, hashedPassword);
// }
