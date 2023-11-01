"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressBar from "./progress";
import PersonalCard from "./personalCard";

function CardTypeSelect() {
  return (
    <div className="mt-[40px] w-full flex flex-col items-center justify-center bg-[#f0f0ed] gap-3">
      <ProgressBar />
      <Tabs
        defaultValue="process"
        className="w-[400px] h-[420px] bg-[#a2d2ff] p-5 flex flex-col  rounded-md "
      >
        <TabsList className="flex justify-between mb-3">
          <TabsTrigger className="w-1/2" value="process">
            In process
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="difficult">
            Difficult
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="learned">
            Learned
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="learned"
          className="flex flex-col gap-2 items-center"
        >
          <PersonalCard />
        </TabsContent>
        <TabsContent
          value="difficult"
          className="flex flex-col gap-2 items-center"
        >
          <PersonalCard />
        </TabsContent>
        <TabsContent
          value="process"
          className="flex flex-col gap-2 items-center"
        >
          <PersonalCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default CardTypeSelect;
