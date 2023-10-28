import { Button } from "@/components/ui/button";
function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#ade8f4]">
      <div className="h-96 w-1/3 bg-[#edede9] rounded-md">
        <div>
          <Button>Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
