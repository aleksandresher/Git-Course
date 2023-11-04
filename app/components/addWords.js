import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";

function AddWords() {
  const {
    register,
    form,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add word</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add word</DialogTitle>
            <DialogDescription>
              You can add new words here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="english" className="text-right">
                English
              </label>
              <input
                id="english"
                {...register("english", { required: "this field is required" })}
              />
              {errors.english?.message && <span>{errors.english.message}</span>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="german" className="text-right">
                German
              </label>
              <input
                id="german"
                {...register("german", { required: "this field is required" })}
              />
              {errors.german?.message && <span>{errors.german.message}</span>}
            </div>
          </div>
          <DialogFooter>
            <Button>submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default AddWords;
