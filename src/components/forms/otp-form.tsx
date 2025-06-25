import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useUserStore } from "@/stores/user-store";

const otpSchema = z.object({
  otp: z
    .string()
    .min(4, "OTP must be 4 digits")
    .max(4, "OTP must be 4 digits")
    .regex(/^\d{4}$/, "OTP must be numeric"),
});

export default function OTPForm({ email }: { email: string }) {
  const { login } = useUserStore();
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    console.log("OTP submitted:", values.otp);
    login(email, values.otp);
  };
  const otpFieldClass = "flex-1 h-15";
  return (
    <div className="mx-auto space-y-6 mt-5">
      <h2 className="text-base font-semibold text-center mb-5">Enter OTP</h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <InputOTP
          maxLength={4}
          {...form.register("otp")}
          value={form.watch("otp")}
          onChange={(value) => form.setValue("otp", value)}
          className="w-full"
        >
          <InputOTPGroup className="w-full ">
            <InputOTPSlot index={0} className={otpFieldClass} />
            <InputOTPSlot index={1} className={otpFieldClass} />
            <InputOTPSlot index={2} className={otpFieldClass} />
            <InputOTPSlot index={3} className={otpFieldClass} />
          </InputOTPGroup>
        </InputOTP>

        {form.formState.errors.otp && (
          <p className="text-sm text-red-500">
            {form.formState.errors.otp.message}
          </p>
        )}

        <Button type="submit" className="w-full">
          Verify OTP
        </Button>
      </form>
      <div className="text-sm text-center text-muted-foreground">
        Didn’t get it? <Button variant={"link"}>Resend OTP</Button>
      </div>
    </div>
  );
}
