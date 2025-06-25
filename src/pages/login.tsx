import { useState } from "react";
import LoginForm from "@/components/forms/login-form";
import OTPForm from "@/components/forms/otp-form";
import { cn } from "@/lib/utils";

export default function Login() {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");

  return (
    <div className={cn("relative ")}>
      <div className="mb-16 text-center">
        <h2 className="text-xl font-semibold mb-1">Welcome back</h2>
        <p className="text-sm">Securely sign in to your account.</p>
      </div>

      <div
        className={cn(
          "top-20 left-0 w-full transition-all duration-500 ease-in-out",
          step === "login"
            ? "opacity-100 translate-x-0 z-10"
            : "opacity-0 -translate-x-full z-0 pointer-events-none",
        )}
      >
        <LoginForm
          onSuccess={(submittedEmail: string) => {
            setEmail(submittedEmail);
            setStep("otp");
          }}
        />
      </div>

      <div
        className={cn(
          "absolute top-20 left-0 w-full transition-all duration-500 ease-in-out",
          step === "otp"
            ? "opacity-100 translate-x-0 z-10"
            : "opacity-0 translate-x-full z-0 pointer-events-none",
        )}
      >
        <OTPForm email={email} />
      </div>
    </div>
  );
}
