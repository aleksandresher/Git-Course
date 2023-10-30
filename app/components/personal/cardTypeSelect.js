"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CardTypeSelect() {
  return (
    <div>
      <div className="h-screen w-full flex items-center justify-center bg-[#f0f0ed]">
        <Tabs
          defaultValue="signIn"
          className="w-[400px] h-[420px] bg-[#a2d2ff] p-5 flex flex-col  rounded-md "
        >
          <TabsList className="flex justify-between mb-3">
            <TabsTrigger className="w-1/2" value="learned">
              Learned
            </TabsTrigger>
            <TabsTrigger className="w-1/2" value="difficult">
              Difficult
            </TabsTrigger>
            <TabsTrigger className="w-1/2" value="process">
              In process
            </TabsTrigger>
          </TabsList>
          <TabsContent value="learned" className="flex flex-col gap-2">
            <p>learned cards</p>
          </TabsContent>
          <TabsContent value="difficult" className="flex flex-col gap-2">
            <p>difficult cards</p>
          </TabsContent>
          <TabsContent value="process" className="flex flex-col gap-2">
            <p>in process cards</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export default CardTypeSelect;
