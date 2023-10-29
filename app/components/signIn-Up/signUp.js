import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="p-1 rounded-sm"
          {...register("email", { required: "Email is required" })}
        />
        {errors?.email?.message ? (
          <p className="text-red-600">{errors.email.message}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="p-1 rounded-sm"
          {...register("password", {
            required: "Password is required",
            minLength: 8,
          })}
        />
        {errors?.password?.message ? (
          <p className="text-red-600">{errors.password.message}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="p-1 rounded-sm"
          {...register("password", { required: "Password is required" })}
        />
        {errors?.password?.message ? (
          <p className="text-red-600">{errors.password.message}</p>
        ) : (
          ""
        )}
      </div>
      <Button className="mt-3 w-full" type="submit">
        Create Account
      </Button>
    </form>
  );
}
export default SignUp;
