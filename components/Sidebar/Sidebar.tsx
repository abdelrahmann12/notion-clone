import NewDocumentBtn from "../NewDocumentBtn/NewDocumentBtn";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentBtn></NewDocumentBtn>
    </>
  );
  return (
    <div className=" flex flex-col relative bg-gray-200 p-2">

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu></Menu>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>

              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
        <div className=" hidden md:inline">{menuOptions}</div>
    </div>
  );
}
