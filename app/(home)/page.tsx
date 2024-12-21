"use client";

import { WeeklyActivity } from "@/components/pages/home/views/weekly-activity";
import { RecentTransactions } from "@/components/pages/home/views/recent-transactions";
import { QuickTransfer } from "@/components/pages/home/views/quick-transfer";
import { ExpenseStatistics } from "@/components/pages/home/views/expense-statistics";
import { CreditCards } from "@/components/pages/home/views/credit-cards";
import { BalanceHistory } from "@/components/pages/home/views/balance-history";
import { DashboardSection } from "@/components/pages/home/components/dashboard-section";

export default function Dashboard() {
  return (
    <>
      <div className="w-full px-6 md:px-10 py-0 md:py-6">
        <div className="grid grid-cols-3 gap-[30px]">
          <DashboardSection
            className="col-span-3 md:col-span-2"
            title="My Cards"
            action="See All"
            actionUrl="/credit-cards"
          >
            <CreditCards />
          </DashboardSection>
          <DashboardSection
            className="col-span-3 md:col-span-1"
            title="Recent Transactions"
          >
            <RecentTransactions />
          </DashboardSection>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-6">
          <DashboardSection
            className="col-span-3 md:col-span-2"
            title="Weekly Activity"
          >
            <WeeklyActivity />
          </DashboardSection>
          <DashboardSection
            className="col-span-3 md:col-span-1"
            title="Expense Statistics"
          >
            <ExpenseStatistics />
          </DashboardSection>
        </div>
        <div className="grid grid-cols-10 gap-[30px] mt-6">
          <DashboardSection
            className="col-span-10 md:col-span-4"
            title="Quick Transfer"
          >
            <QuickTransfer />
          </DashboardSection>
          <DashboardSection
            className="col-span-10 md:col-span-6"
            title="Balance History"
          >
            <BalanceHistory />
          </DashboardSection>
        </div>
      </div>
    </>
  );
}