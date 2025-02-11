import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const CustomLoading = ({loading}) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent >
        <div className="flex flex-col items-center my-10 justify-center">
            <Image src={'/progress.gif'} width={100} height={100} alt="loading" />
            <h2>Generating Your Video... Do Not Refresh!</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
