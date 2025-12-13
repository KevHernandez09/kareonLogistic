"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPending(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error ?? "Login failed");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMsg("Unexpected error");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-start pl-10 md:pl-16 lg:pl-24 pr-4">
      {/* Fondo foto logística */}
      <div
        className="
          absolute inset-0 -z-20
          bg-[url('/fondo-logistica.png')] bg-cover bg-center bg-no-repeat
        "
      />

      {/* Overlay para contraste */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-br from-black/55 via-black/30 to-black/55
        "
      />

      {/* Card izquierda */}
      <div
        className="
          relative w-full max-w-md rounded-3xl border border-emerald-50/70
          bg-white/95 px-7 py-8 sm:px-9 sm:py-9
          shadow-[0_22px_60px_rgba(15,23,42,0.55)]
        "
      >
        {/* Logo + nombre */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white text-lg font-bold shadow-md">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-neutral-900">
              Kareon Logistic
            </span>
          </div>
        </div>

        <header className="mb-5">
          <h1 className="text-lg font-semibold text-neutral-900">
            Iniciar sesión en tu cuenta
          </h1>
          <p className="mt-1 text-xs text-neutral-500">
            Ingresa tus credenciales para continuar.
          </p>
        </header>

        {errorMsg && (
          <div
            className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
            role="alert"
          >
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-neutral-800">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                className="
                  w-full rounded-lg border border-neutral-300 bg-white
                  pl-10 pr-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none
                  transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="usuario@empresa.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-neutral-800">
                Contraseña
              </label>
              <a
                href="/auth/forgot-password"
                className="text-[11px] text-emerald-700 hover:text-emerald-800"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type={showPassword ? "text" : "password"}
                className="
                  w-full rounded-lg border border-neutral-300 bg-white
                  pl-10 pr-10 py-2.5 text-sm text-neutral-900 shadow-sm outline-none
                  transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-[11px] text-neutral-500 hover:text-neutral-800"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="
              mt-2 inline-flex w-full items-center justify-center rounded-lg
              bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white
              shadow-md shadow-emerald-600/30 transition hover:bg-emerald-500
            "
          >
            {pending ? (
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Entrando…
              </span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-[11px] text-neutral-500">
          ¿Nuevo en Kareon?{" "}
          <a
            href="/auth/register"
            className="font-medium text-emerald-700 hover:text-emerald-800"
          >
            Crear cuenta
          </a>
        </p>
      </div>
    </main>
  );
}
