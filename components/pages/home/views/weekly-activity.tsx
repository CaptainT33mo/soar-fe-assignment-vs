
import { WeeklyActivityChart } from "../components/weekly-activity-chart";
import { WeeklyTransactionsReponse } from "@/types";
import useFetchData from "@/hooks/useFetchData";

export const WeeklyActivity = () => {
  const { data, isSuccess } = useFetchData<WeeklyTransactionsReponse>({
    url: "/weekly-activity",
    queryKey: ["weekly-activity"],
  });

  return (
    <div className="mt-5 bg-white flex flex-col justify-between rounded-3xl p-4 md:p-7 h-[254px] md:h-[322px]">
      <div className="w-full flex justify-end gap-[30px]">
        <div className="flex gap-2.5 items-center">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <p className="text-text-secondary text-xs md:text-[15px]">Deposit</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <p className="text-text-secondary text-xs md:text-[15px]">Withdraw</p>
        </div>
      </div>
      <WeeklyActivityChart data={isSuccess ? data.transactions : []} />
    </div>
  );
};