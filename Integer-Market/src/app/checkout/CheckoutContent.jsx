"use client";

import { useSearchParams } from "next/navigation";
import Checkout from "../../views/Checkout";

export default function CheckoutContent({ reportId: initialReportId }) {
  const searchParams = useSearchParams();
  
  const reportId = searchParams.get("reportId") || initialReportId;

  return <Checkout reportId={reportId} />;
}