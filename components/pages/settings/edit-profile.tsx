"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { editProfileFormSchema } from "@/lib/form/profileFormValidation";
import useFetchData from "@/hooks/useFetchData";
import { AccountDataRequest, AccountDataResponse } from "@/types";
import { useUserStore } from "@/store";
import useSendData from "@/hooks/useSubmitData";
import { useQueryClient } from "@tanstack/react-query";
import { EditProfileForm } from "./edit-ptofile-form";

export const EditProfile = () => {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useFetchData<AccountDataResponse>({
    url: "/me",
    queryKey: ["account"],
    options: {
      enabled: !queryClient.getQueryData(["account"]),
      initialData: queryClient.getQueryData(["account"]),
    },
  });
  const { user, setUser } = useUserStore();

  const { mutate } = useSendData<AccountDataResponse, AccountDataRequest>({
    url: "/me",
    method: "put",
    options: {
      onSuccess: (response) => {
        toast.success("Profile Successfully Updated.");
        setUser({ ...user, ...response.account });
      },
    },
  });

  const handleSubmit = (data: z.infer<typeof editProfileFormSchema>) => {
    mutate({ account: data });
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(data.account);
    }
  }, [isSuccess]);

  return (
    <div className="pt-10">
      {data?.account ? (
        <EditProfileForm initialValues={user ?? {}} onSubmit={handleSubmit} />
      ) : (
        <div className="w-full py-9 flex justify-center">
          <Loader2 className="animate-spin w-12 h-12" />
        </div>
      )}
    </div>
  );
};