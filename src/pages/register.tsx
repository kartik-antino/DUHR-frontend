import { useState } from "react";
import OTPForm from "@/components/forms/otp-form";
import RegisterForm from "@/components/forms/register-form";
import { cn } from "@/lib/utils";

export default function Register() {
  const [step, setStep] = useState<"register" | "otp">("register");
  const [email, setEmail] = useState("");

  return (
    <div className={cn("relative")}>
      <div className="mb-16 text-center">
        <h2 className="text-xl font-semibold mb-1">Create an account</h2>
        <p className="text-sm">Join us and simplify your hiring process.</p>
      </div>

      <div
        className={cn(
          "top-20 left-0 w-full transition-all duration-500 ease-in-out",
          step === "register"
            ? "opacity-100 translate-x-0 z-10"
            : "opacity-0 -translate-x-full z-0 pointer-events-none",
        )}
      >
        <RegisterForm
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
