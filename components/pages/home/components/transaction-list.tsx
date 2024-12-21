import React from "react";

import { cn, formatNumber } from "@/lib/utils";

import { Transaction } from "@/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PaypalIcon from "@/components/icons/paypal";
import CardTransactionIcon from "@/components/icons/card-transaction";
import DirectTransactionIcon from "@/components/icons/direct-transaction";

const transactionIcon: {
  [type in "card" | "paypal" | "direct"]: React.ReactNode;
} = {
  card: <CardTransactionIcon />,
  paypal: <PaypalIcon />,
  direct: <DirectTransactionIcon />,
};

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  console.log(transactions);
  return (
    <ScrollArea
      scrollBarClassName="[&>div]:bg-black/10"
      className="pr-4"
      type="always"
    >
      <div className="flex flex-col gap-2.5">
        {transactions.map((transaction) => (
          <div
            className="w-full flex justify-between items-center gap-4 overflow-hidden"
            key={transaction.id}
          >
            <div className="flex gap-4 [&>svg]:h-[50px] md:[&>svg]:h-[55px] [&>svg]:w-[50px] md:[&>svg]:w-[55px]">
              {transactionIcon[transaction.type]}
              <div className="h-[50px] md:h-[55px] flex flex-col justify-center">
                <p className="font-medium line-clamp-1 text-sm md:text-base">
                  {transaction.message}
                </p>
                <p className="text-text-secondary text-xs md:text-[15px] line-clamp-1">
                  {transaction.date}
                </p>
              </div>
            </div>
            <p
              className={cn(
                "font-medium text-[11px] md:text-base",
                transaction.value < 0
                  ? "text-text-negative"
                  : "text-text-positive"
              )}
            >
              {transaction.value < 0 ? "-" : "+"}$
              {formatNumber(Math.abs(transaction.value))}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar className="hidden" />
    </ScrollArea>
  );
};