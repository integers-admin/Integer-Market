'use client'
import LegalPage from './LegalPage'

export default function CancellationPolicy() {
  return (
    <LegalPage title="Cancellation Policy" lastUpdated="May 1, 2026">
      <h2>1. Subscription Cancellations</h2>
      <p>You may cancel your Integer Market subscription at any time from your account dashboard. Cancellation takes effect at the end of your current billing period. You will continue to have access to your plan benefits until the billing period ends.</p>
      <p>We do not prorate refunds for partial billing periods unless you cancel within the refund window specified below.</p>

      <h2>2. Refund Eligibility - Annual Subscriptions</h2>
      <p>Annual subscriptions are eligible for a full refund within 7 days of purchase, provided you have not downloaded more than 3 reports during that period. After 7 days or 3 downloads (whichever comes first), annual subscriptions are non-refundable.</p>

      <h2>3. Refund Eligibility - Monthly Subscriptions</h2>
      <p>Monthly subscriptions are non-refundable. You may cancel at any time to prevent future charges, but we do not issue refunds for the current billing month.</p>

      <h2>4. Individual Report Purchases</h2>
      <p>Individual report purchases are non-refundable once the report has been downloaded. If you have purchased a report but have not yet downloaded it, please contact support within 24 hours of purchase if you believe there was an error.</p>

      <h2>5. Exceptions</h2>
      <p>We may consider refunds in exceptional circumstances, including:</p>
      <ul>
        <li>Technical errors that prevented report download</li>
        <li>Duplicate charges due to payment processing errors</li>
        <li>Reports found to contain significant factual inaccuracies after our quality review</li>
      </ul>
      <p>All exception requests must be submitted to support@integermarket.com within 14 days of the original transaction.</p>

      <h2>6. How to Cancel</h2>
      <p>To cancel your subscription: log in to your account, go to Account Settings, select "Subscription", and click "Cancel Subscription". You will receive a confirmation email.</p>
      <p>For refund requests or cancellation assistance, contact support@integermarket.com.</p>

      <h2>7. Effect of Cancellation</h2>
      <p>After cancellation, you retain access to all previously downloaded reports. However, you will lose access to the report catalog, new downloads, and subscriber-only features at the end of your billing period.</p>
    </LegalPage>
  )
}
