type Status = "active" | "pending" | "failed" | "archived";

const labelByStatus: Record<Status, string> = {
  active: "Active",
  pending: "Pending",
  failed: "Failed",
  archived: "Archived"
};

export function StatusBadge({ status }: { status: Status }) {
  return <span data-status={status}>{labelByStatus[status]}</span>;
}
