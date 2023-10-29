"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogIn from "../components/signIn-Up/logIn";
import SignUp from "../components/signIn-Up/signUp";

function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f0f0ed]">
      <Tabs
        defaultValue="signIn"
        className="w-[400px] h-[420px] bg-[#a2d2ff] p-5 flex flex-col  rounded-md "
      >
        <TabsList className="flex justify-between mb-3">
          <TabsTrigger className="w-1/2" value="signIn">
            Sign In
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="signUp">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signIn" className="flex flex-col gap-2">
          <LogIn />
        </TabsContent>
        <TabsContent value="signUp" className="flex flex-col gap-2">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default LoginPage;
