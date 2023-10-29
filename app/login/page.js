"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogIn from "../components/logIn";
import SignUp from "../components/signUp";

function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#edede9]">
      <Tabs
        defaultValue="signIn"
        className="w-[400px] h-[420px] bg-[#a2d2ff] p-5 flex flex-col  rounded-md "
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
