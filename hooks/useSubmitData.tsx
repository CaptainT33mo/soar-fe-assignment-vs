import { api } from "@/lib/apiClient";
import { ApiErrorResponse } from "@/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface SendDataConfig<T, R> {
  url: string;
  method: "post" | "put" | "patch" | "delete";
  data?: R;
  options?: UseMutationOptions<T, AxiosError<ApiErrorResponse>, R>;
}

const submitData = async <T, R>(
  url: string,
  method: "post" | "put" | "patch" | "delete",
  data?: R
): Promise<T> => {
  const response = await (method === "delete"
    ? api.delete<T>(url)
    : api[method]<T>?.(url, data));
  return response;
};

const useSubmitData = <T, R>({ url, method, options }: SendDataConfig<T, R>) => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    T,
    AxiosError<ApiErrorResponse>,
    R
  >({
    mutationFn: (data) => submitData<T, R>(url, method, data),
    onError: (err) => {
      toast.error(err.response?.data?.message ?? "Something went wrong, please try again!");
    },
    ...options,
  });

  const submitRequest = (inputData: R) => mutate(inputData);

  return {
    mutate: submitRequest,
    isPending,
    isSuccess,
    isError,
    error,
  };
};

export default useSubmitData;