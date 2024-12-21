import useFetchData from "@/hooks/useFetchData";
import { ExpenseStatisticsResponse } from "@/types";
import { ExpenseStatisticsChart } from "../components/expense-statistics-chart";

export const ExpenseStatistics = () => {
  const { data, isSuccess } = useFetchData<ExpenseStatisticsResponse>({
    url: "/expense-statistics",
    queryKey: ["expense-statistics"],
  });

  return (
    <div className="mt-5 flex bg-white rounded-3xl h-[254px] md:h-[322px]">
      <ExpenseStatisticsChart data={isSuccess ? data.statistics : []} />
    </div>
  );
};