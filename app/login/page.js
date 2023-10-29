"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#edede9]">
      <Tabs
        defaultValue="signIn"
        className="w-[400px] h-[400px] bg-[#a2d2ff] p-5 flex flex-col  rounded-md "
      >
        <TabsList className="flex justify-between mb-3">
          <TabsTrigger className="w-1/2" value="signIn">
            Sign in
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="signUp">
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signIn" className="flex flex-col gap-2">
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
                {...register("password", { required: "Password is required" })}
              />
              {errors?.password?.message ? (
                <p className="text-red-600">{errors.password.message}</p>
              ) : (
                ""
              )}
            </div>
            <Button className="mt-4 w-full" type="submit">
              Login
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="signUp" className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="p-1 rounded-sm"
              {...register("email", { required: "email is required" })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="p-1 rounded-sm"
              {...register("password", { required: "email is required" })}
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
              {...register("password", { required: "email is required" })}
            />
            {errors?.password?.message ? (
              <p className="text-red-600">{errors.password.message}</p>
            ) : (
              ""
            )}
          </div>
          <Button className="mt-5">Create Account</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default LoginPage;
