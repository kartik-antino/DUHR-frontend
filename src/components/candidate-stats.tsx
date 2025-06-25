import {
  ChartNoAxesColumn,
  Handshake,
  MailCheck,
  Phone,
  Send,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const funnelData = [
  {
    label: "Messages Sent",
    value: "2,456",
    subtext: "WhatsApp + Email",
    icon: Send,
  },
  {
    label: "Messages Delivered",
    value: "2,389",
    subtext: "97% delivery rate",
    icon: MailCheck,
  },
  {
    label: "Interested Candidates",
    value: "896",
    subtext: "56% interest rate",
    icon: Users,
  },
  {
    label: "Interviews Scheduled",
    value: "234",
    subtext: "26% conversion",
    icon: Phone,
  },
  {
    label: "Hired",
    value: "234",
    subtext: "26% conversion",
    icon: Handshake,
  },
];

export default function CandidateStats() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <ChartNoAxesColumn /> Candidate Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {funnelData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border rounded-lg p-4"
          >
            <div className="flex items-center space-x-3">
              <div className="rounded-full">{<item.icon />}</div>
              <div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.subtext}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
