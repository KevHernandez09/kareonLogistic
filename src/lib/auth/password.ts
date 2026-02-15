/**
 * Placeholder password utilities.
 * TODO: wire secure hashing strategy.
 */

/**
 * Hashes a plain-text password.
 */
export async function hashPassword(_plainPassword: string): Promise<string> {
  void _plainPassword;
  // Placeholder: password hashing not implemented yet.
  return "";
}

/**
 * Compares a plain-text password against a hash.
 */
export async function verifyPassword(
  _plainPassword: string,
  _hashedPassword: string,
): Promise<boolean> {
  void _plainPassword;
  void _hashedPassword;
  // Placeholder: password verification not implemented yet.
  return false;
}
