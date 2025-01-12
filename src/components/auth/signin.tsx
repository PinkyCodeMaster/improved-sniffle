import { signIn } from "~/server/auth";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SignIn() {
    return (
        <form
            action={async (formData) => {
                "use server";
                await signIn("resend", { email: formData.get("email") });
            }}
        >
            <Input type="email" name="email" placeholder="Email" required />
            <Button type="submit">Sign in with Resend</Button>
        </form>
    );
}
