/**
 * Placeholder session contract.
 * TODO: implement concrete session provider wiring.
 */
export type SessionData = {
  userId: string;
  email?: string;
};

/**
 * Reads the current session, if available.
 */
export async function getSession(): Promise<SessionData | null> {
  // Placeholder: session retrieval not implemented yet.
  return null;
}

/**
 * Creates a session for the given user identifier.
 */
export async function createSession(_userId: string): Promise<void> {
  void _userId;
  // Placeholder: session creation not implemented yet.
}

/**
 * Destroys the active session.
 */
export async function destroySession(): Promise<void> {
  // Placeholder: session destruction not implemented yet.
}
